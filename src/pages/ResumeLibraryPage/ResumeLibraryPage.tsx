import { useMemo, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ASSETS } from '../../assets/constants';
import { uploadResumeMock } from '../../services/resumeUpload';
import styles from './ResumeLibraryPage.module.css';

type UploadState = 'uploading' | 'ready' | 'error';

interface ResumeCardItem {
  id: string;
  fileName: string;
  title: string;
  summary: string;
  uploadedAt: string;
  fileType: string;
  state: UploadState;
  errorMessage?: string;
}

interface UploadFeedback {
  kind: 'idle' | 'uploading' | 'success' | 'error';
  message: string;
}

const ACCEPTED_TYPES = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

function formatUploadDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return '--';
  }

  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function ResumeLibraryPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resumes, setResumes] = useState<ResumeCardItem[]>([]);
  const [feedback, setFeedback] = useState<UploadFeedback>({ kind: 'idle', message: '' });

  const totalReadyCount = useMemo(() => resumes.filter((item) => item.state === 'ready').length, [resumes]);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const uploadOneFile = async (file: File): Promise<'ready' | 'error'> => {
    const tempId = `temp-${crypto.randomUUID()}`;

    setResumes((prev) => [
      {
        id: tempId,
        fileName: file.name,
        title: file.name,
        summary: '正在上传并解析简历内容...',
        uploadedAt: new Date().toISOString(),
        fileType: '--',
        state: 'uploading',
      },
      ...prev,
    ]);

    try {
      const uploaded = await uploadResumeMock(file);

      setResumes((prev) =>
        prev.map((item) =>
          item.id === tempId
            ? {
                ...item,
                id: uploaded.id,
                fileName: uploaded.fileName,
                title: uploaded.title,
                summary: uploaded.summary,
                uploadedAt: uploaded.uploadedAt,
                fileType: uploaded.fileType,
                state: 'ready',
              }
            : item,
        ),
      );

      return 'ready';
    } catch (error) {
      const message = error instanceof Error ? error.message : '上传失败，请重试';

      setResumes((prev) =>
        prev.map((item) =>
          item.id === tempId
            ? {
                ...item,
                summary: '上传失败，未能生成摘要。',
                state: 'error',
                errorMessage: message,
              }
            : item,
        ),
      );

      return 'error';
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length === 0) {
      return;
    }

    const files = Array.from(fileList);
    setFeedback({
      kind: 'uploading',
      message: files.length === 1 ? '正在上传 1 份简历...' : `正在上传 ${files.length} 份简历...`,
    });

    const results = await Promise.all(files.map((file) => uploadOneFile(file)));
    const successCount = results.filter((result) => result === 'ready').length;
    const errorCount = results.length - successCount;

    if (errorCount === 0) {
      setFeedback({
        kind: 'success',
        message: successCount === 1 ? '上传成功，简历卡片已更新。' : `上传成功，已新增 ${successCount} 张简历卡片。`,
      });
    } else if (successCount === 0) {
      setFeedback({ kind: 'error', message: '上传失败，请检查文件格式或大小后重试。' });
    } else {
      setFeedback({
        kind: 'error',
        message: `已成功 ${successCount} 份，失败 ${errorCount} 份。请重试失败文件。`,
      });
    }

    event.target.value = '';
  };

  return (
    <div className={styles.page}>
      <Header activeTab="library" />

      <main className={styles.main}>
        <section className={styles.container}>
          <h1>我的简历库</h1>
          <p className={styles.desc}>在此管理您的不同简历版本，为每个职位匹配最合适的 AI 智能摘要。</p>

          <div className={styles.divider} />

          <div className={styles.headRow}>
            <div>
              <h2>简历库</h2>
              <p>上传第一份简历后，系统将利用 AI 自动为您生成针对不同岗位的简历版本标题与摘要，助力精准投递。</p>
            </div>

            <button type="button" className={styles.uploadBtn} onClick={openFilePicker}>
              <img src={ASSETS.iconUploadSmall} alt="" />
              开始上传简历
              <span>推荐</span>
            </button>

            <input
              ref={fileInputRef}
              type="file"
              className={styles.hiddenInput}
              accept={ACCEPTED_TYPES}
              multiple
              onChange={handleFileChange}
            />
          </div>

          {feedback.kind !== 'idle' && (
            <div
              className={`${styles.feedback} ${
                feedback.kind === 'uploading'
                  ? styles.feedbackUploading
                  : feedback.kind === 'success'
                    ? styles.feedbackSuccess
                    : styles.feedbackError
              }`}
            >
              {feedback.message}
            </div>
          )}

          {resumes.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.fileIcon}>📄</div>
              <h3>未命名简历</h3>
              <p>上传简历后将自动生成版本标题与职业摘要</p>
              <div className={styles.waiting}>等待上传中</div>
            </div>
          ) : (
            <div className={styles.grid}>
              {resumes.map((resume) => (
                <article
                  key={resume.id}
                  className={`${styles.card} ${
                    resume.state === 'uploading'
                      ? styles.cardUploading
                      : resume.state === 'error'
                        ? styles.cardError
                        : styles.cardReady
                  }`}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.fileIcon}>📄</div>
                    <span
                      className={`${styles.badge} ${
                        resume.state === 'uploading'
                          ? styles.badgeUploading
                          : resume.state === 'error'
                            ? styles.badgeError
                            : styles.badgeReady
                      }`}
                    >
                      {resume.state === 'uploading' ? '上传中' : resume.state === 'error' ? '失败' : '已上传'}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{resume.title}</h3>
                  <p className={styles.cardSummary}>
                    {resume.state === 'error' && resume.errorMessage ? resume.errorMessage : resume.summary}
                  </p>

                  <div className={styles.meta}>
                    <span>上传日期：{formatUploadDate(resume.uploadedAt)}</span>
                    <span>文件类型：{resume.fileType}</span>
                  </div>

                  <p className={styles.fileName}>{resume.fileName}</p>
                </article>
              ))}
            </div>
          )}

          <p className={styles.hint}>• 支持 PDF / DOC / DOCX，单文件最大 10MB。已上传 {totalReadyCount} 份简历。</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
