import React from "react";
type ContentCardProps = {
    title: string;
    contents: string[];
};

type ListItem = {
    name: string;
    link: string;
};

type LinkedListProps = {
    title: string;
    items: ListItem[];
};
  
const ContentCard: React.FC<ContentCardProps> = ({ title, contents }) => (
    <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start content-card bg-gray shadow-md p-6 rounded-lg">
        <div className="flex-1">
            <h2 className="text-3xl font-bold text-white-500">{title}</h2>
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

export {
    LinkedList,
    ContentCard
};