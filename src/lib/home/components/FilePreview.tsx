interface FilePreviewProps {
    file: File;
    onRemove: () => void;
  }
  
  const FilePreview: React.FC<FilePreviewProps> = ({ file, onRemove }) => {
    return (
      <div className="mt-4 p-3 border rounded-lg bg-white shadow flex items-center space-x-2">
        <div className="bg-blue-100 p-2 rounded">📄</div>
        <p className="text-sm text-gray-700 truncate max-w-xs">{file.name}</p>
        <button onClick={onRemove} className="text-red-500">✖</button>
      </div>
    );
  };
  
  export default FilePreview;
  