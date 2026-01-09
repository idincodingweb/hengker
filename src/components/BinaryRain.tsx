import { useEffect, useState } from 'react';

interface BinaryColumn {
  id: number;
  left: number;
  duration: number;
  delay: number;
  content: string;
  fontSize: number;
}

const BinaryRain = () => {
  const [columns, setColumns] = useState<BinaryColumn[]>([]);

  useEffect(() => {
    const generateMatrixString = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      let str = '';
      for (let i = 0; i < 50; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
        str += '\n';
      }
      return str;
    };

    const cols: BinaryColumn[] = [];
    const numColumns = 80;

    for (let i = 0; i < numColumns; i++) {
      cols.push({
        id: i,
        left: (i / numColumns) * 100,
        duration: 3 + Math.random() * 7,
        delay: Math.random() * 5,
        content: generateMatrixString(),
        fontSize: 12 + Math.random() * 6,
      });
    }

    setColumns(cols);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {columns.map((col) => (
        <div
          key={col.id}
          className="binary-column whitespace-pre"
          style={{
            left: `${col.left}%`,
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`,
            fontSize: `${col.fontSize}px`,
            opacity: 0.3 + Math.random() * 0.5,
          }}
        >
          {col.content}
        </div>
      ))}
    </div>
  );
};

export default BinaryRain;
