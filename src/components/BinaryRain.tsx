import { useEffect, useState } from 'react';

interface BinaryColumn {
  id: number;
  left: number;
  duration: number;
  delay: number;
  content: string;
}

const BinaryRain = () => {
  const [columns, setColumns] = useState<BinaryColumn[]>([]);

  useEffect(() => {
    const generateBinaryString = () => {
      let str = '';
      for (let i = 0; i < 40; i++) {
        str += Math.random() > 0.5 ? '1' : '0';
        str += '\n';
      }
      return str;
    };

    const cols: BinaryColumn[] = [];
    const numColumns = 60;

    for (let i = 0; i < numColumns; i++) {
      cols.push({
        id: i,
        left: (i / numColumns) * 100,
        duration: 4 + Math.random() * 8,
        delay: Math.random() * 3,
        content: generateBinaryString(),
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
          }}
        >
          {col.content}
        </div>
      ))}
    </div>
  );
};

export default BinaryRain;
