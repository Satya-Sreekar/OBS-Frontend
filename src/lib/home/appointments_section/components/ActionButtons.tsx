import { ThumbsUp, ThumbsDown, RefreshCw, Copy, Share2, MoreVertical } from "lucide-react"

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <button className="action-btn" aria-label="Like">
        <ThumbsUp size={20} />
      </button>
      <button className="action-btn" aria-label="Dislike">
        <ThumbsDown size={20} />
      </button>
      <button className="action-btn" aria-label="Refresh">
        <RefreshCw size={20} />
      </button>
      <button className="action-btn" aria-label="Copy">
        <Copy size={20} />
      </button>
      <button className="action-btn" aria-label="Share">
        <Share2 size={20} />
      </button>
      <button className="action-btn" aria-label="More options">
        <MoreVertical size={20} />
      </button>
    </div>
  )
}

export default ActionButtons

