import React from "react";
import Image from "next/image";
type ContentCardProps = {
    title: string;
    contents: string[];
    id?: string;
};

type ImageSize = {
    width: number;
    height: number;
};

type ContentCardImageProps = {
    title: string;
    contents: string[];
    image: string;
    size?: ImageSize;
    id?: string;
    nextTo?: boolean;
};

type ListItem = {
    name: string;
    link: string;
};

type LinkedListProps = {
    title: string;
    items: ListItem[];
};

type TableOfContentsProps = {
  sections: { title: string; id: string; level:number }[];
};

type CannonPoint = {
  subtitle: string;
  text: string;
};

type CannonPointsProps = {
  title: string;
  points: CannonPoint[];
  id?: string;
};

type ComparisonSubPoint = {
  title: string;
  content: string;
};

type ComparisonPoint = {
  title: string;
  content: string;
  subPoints?: ComparisonSubPoint[];
  id?: string;
};

type ComparisonCardProps = {
  points: ComparisonPoint[];
};

const ComparisonCard: React.FC<ComparisonCardProps> = ({ points }) => (
  <div className="bg-gray shadow-md p-6 rounded-lg">
    {points.map((point, index) => (
      <div key={index} className="mb-4">
        <div className="text-2xl font-bold text-white-500" id={point.id}>{point.title}</div>
        <p className="mt-4 mb-6 text-blue-200 text-lg leading-relaxed">{point.content}</p>
        {point.subPoints?.map((subPoint, subIndex) => (
          <div key={subIndex} className="ml-4">
            <div className="text-white-500 text-lg">{subPoint.title}</div>
            <p className="mt-4 mb-6 text-blue-200 text-lg leading-relaxed">{subPoint.content}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const CannonPoints: React.FC<CannonPointsProps> = ({ title, points, id="default-cannonpoint" }) => (
  <div className="cannon-points-card bg-gray shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white-500" id={id}>{title}</h2>
      {points.map((point, index) => (
          <div key={index} className="mt-4">
              <span className="text-lg font-bold">{point.subtitle}</span>
              <p className="mt-4 mb-6 text-blue-200 text-lg leading-relaxed">{point.text}</p>
          </div>
      ))}
  </div>
);
  
const ContentCard: React.FC<ContentCardProps> = ({ title, contents, id="default-card-content" }) => (
    <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start content-card bg-gray shadow-md p-6 rounded-lg">
        <div className="flex-1">
            <h2 className="text-4xl font-bold text-white-500" id={id}>{title}</h2>
            {contents.map((item, index) => (
                <p key={index} className="mt-4 mb-6 text-blue-200 text-lg leading-relaxed">
                    {item}
                </p>
            ))}
        </div>
    </div>
);

const LinkedList: React.FC<LinkedListProps> = ({ title, items }) => (
    <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start content-card bg-gray shadow-md p-6 rounded-lg">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white-500 mb-4">{title}</h2>
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index} className="mb-4">
              <a href={item.link} className="text-blue-300 text-lg leading-relaxed hover:text-blue-100 transition-colors duration-200 ease-in-out">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const ContentCardImage: React.FC<ContentCardImageProps> = ({ title, contents, image, size = { width: 500, height: 500 }, id="default-card-content", nextTo=true }) => (
    <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start content-card bg-gray shadow-md p-6 rounded-lg">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-white-500" id={id}>{title}</h2>
        {nextTo ? (
          <div className="flex gap-6">
            <div>
              {contents.map((item, index) => (
                <p key={index} className="mt-4 mb-6 text-blue-200 text-lg leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
            <Image src={image} alt={title} width={size.width} height={size.height} />
          </div>
        ) : (
          <>
            <div>
              {contents.map((item, index) => (
                <p key={index} className="mt-4 mb-6 text-blue-200 text-lg leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
            <Image src={image} alt={title} width={size.width} height={size.height} />
          </>
        )}
      </div>
    </div>
  );

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => (
  <div className="fixed left-0 top-0 h-screen overflow-auto flex flex-col lg:flex-row gap-6 items-center lg:items-start content-card bg-gray shadow-md p-6 rounded-lg">
    <div className="flex-1">
      <ul className="list-disc list-inside">
        {sections.map((section, index) => (
          <li key={index} className="mb-4" style={{ marginLeft: `${section.level * 20}px`, fontSize: `${1.5 - section.level * 0.15}rem`  }}>
            <a href={`#${section.id}`} className="text-blue-300 text-lg leading-relaxed hover:text-blue-100 transition-colors duration-200 ease-in-out">
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export {
    LinkedList,
    ContentCard,
    ContentCardImage,
    TableOfContents,
    CannonPoints,
    ComparisonCard,
};