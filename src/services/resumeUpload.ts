export interface ResumeUploadResult {
  id: string;
  fileName: string;
  title: string;
  summary: string;
  uploadedAt: string;
  fileType: string;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(['pdf', 'doc', 'docx']);

function getExtension(name: string): string {
  const dotIndex = name.lastIndexOf('.');
  if (dotIndex < 0) {
    return '';
  }
  return name.slice(dotIndex + 1).toLowerCase();
}

function titleFromFileName(fileName: string): string {
  const dotIndex = fileName.lastIndexOf('.');
  return dotIndex > 0 ? fileName.slice(0, dotIndex) : fileName;
}

function detectFileType(fileName: string): string {
  const ext = getExtension(fileName);
  if (!ext) {
    return 'UNKNOWN';
  }
  return ext.toUpperCase();
}

function validateResumeFile(file: File): void {
  const extension = getExtension(file.name);
  if (!ALLOWED_EXTENSIONS.has(extension)) {
    throw new Error('仅支持 PDF / DOC / DOCX 格式文件');
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error('文件超过 10MB，请压缩后重试');
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

/**
 * Mock uploader. Replace this with Supabase or other backend later.
 */
export async function uploadResumeMock(file: File): Promise<ResumeUploadResult> {
  validateResumeFile(file);

  await delay(900 + Math.floor(Math.random() * 700));

  if (/fail|error/i.test(file.name)) {
    throw new Error('模拟上传失败，请重试');
  }

  const now = new Date().toISOString();

  return {
    id: `resume-${crypto.randomUUID()}`,
    fileName: file.name,
    title: titleFromFileName(file.name),
    summary: 'AI 摘要生成中，后续将自动补全岗位匹配亮点。',
    uploadedAt: now,
    fileType: detectFileType(file.name),
  };
}
