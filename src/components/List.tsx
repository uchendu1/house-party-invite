import React from "react";

interface IProps {
  guests: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const imgStyles = {weight:'70px', height: '70px'}

const List: React.FC<IProps> = ({ guests }) => {
  const renderList = (): JSX.Element[] => {
    return guests.map((guest, i) => {
      return (
        <li key={i} className="List">
          <div className="List-header">
            <img src={guest.url}  style={imgStyles} alt="img" />
            <h4>{guest.name}</h4>
          </div>

          <p> {guest.age} years old</p>
          <p className="List-note">{guest.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
