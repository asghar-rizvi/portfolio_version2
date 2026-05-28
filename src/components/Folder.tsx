import { useState } from 'react';
import './Folder.css';

const darkenColor = (hex: string, percent: number) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color.split('').map(c => c + c).join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

interface FolderItem {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface FolderProps {
  color?: string;
  size?: number;
  items: FolderItem[];
  className?: string;
}

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '', onSelect }: FolderProps & { onSelect?: (item: FolderItem) => void }) => {
  const [open, setOpen] = useState(false);

  const folderBackColor = darkenColor(color, 0.15);
  const paperColors = [
    darkenColor('#ffffff', 0.1),
    darkenColor('#ffffff', 0.05),
    '#ffffff',
    '#f0f0f0'
  ];

  const folderStyle: any = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
  };

  return (
    <div className={`relative ${className}`} style={{ transform: `scale(${size})` }}>
      <div 
        className={`folder ${open ? 'open' : ''}`} 
        style={folderStyle}
        onClick={() => setOpen(!open)}
      >
        <div className="folder__back">
          {items.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className={`paper paper-${i + 1} cursor-pointer hover:z-50 group/paper`}
              style={{ backgroundColor: paperColors[i % 4] }}
              onClick={(e) => {
                if (open) {
                  e.stopPropagation();
                  onSelect?.(item);
                }
              }}
            >
              <div className="flex flex-col items-center justify-center p-2 text-center pointer-events-none">
                <div className="text-violet-600 mb-1">{item.icon}</div>
                <div className="text-[8px] font-bold text-black uppercase tracking-tighter leading-none line-clamp-1">{item.title}</div>
              </div>
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
