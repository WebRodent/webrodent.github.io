import React from 'react';
import Image from 'next/image';
import './globals.css';

type ContentRowProps = {
    title?: string;
    article?: string;
    imagePath: string | null;
  };

// A content row component that accepts title, article, and image props
const ContentRow: React.FC<ContentRowProps> = ({ title, article, imagePath }) => (  <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
    <div className="flex-1">
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      {article && <p className="mt-4">{article}</p>}
    </div>
    {imagePath && (
      <div className="flex-1">
        <Image
          src={imagePath}
          alt={`${title} illustration`}
          width={400} // Set the desired width
          height={300} // Set the desired height
          layout="responsive"
        />
      </div>
    )}
  </div>
);

export default ContentRow;