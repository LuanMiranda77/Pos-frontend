/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import "../../index.css";
import { InputDefault } from "../inputs";
import "./style.css";

interface ListProps {
  dataSource: string[];
  setDataSource: Function;
}

const ListTask: React.FC<ListProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const [valueEdit, setValueEdit] = useState<string>("");
  const [isEdit, setEdit] = useState(-1);

  const onAdd = () => {
    let items = [...props.dataSource];
    if (isEdit == -1) {
      items.push(value);
      setValue("");
    } else {
      items[isEdit] = valueEdit;
      setEdit(-1);
    }
    props.setDataSource(items);
  };

  const onDel = (index: number) => {
    let items = [...props.dataSource];
    items.splice(index, 1);
    props.setDataSource(items);
  };

  return (
    <div className="container">
      <InputDefault
        label="Adicione item a lista"
        isTotalize={false}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDownCapture={(e) => e.keyCode === 13 && onAdd()}
      />
      <ul className="container-list">
        {props.dataSource.map((item, index) =>
          isEdit !== index ? (
            <li
              className="item"
              key={index}
              onClick={() => {
                setEdit(index), setValueEdit(item);
              }}
              style={{
                background:
                  item.includes("estudar") || item.includes("ler")
                    ? "blue"
                    : "",
              }}
            >
              <div>
                <input type="checkbox" />
                <span style={{ marginLeft: "8px" }}>{item}</span>
              </div>
            </li>
          ) : (
            <div className="flex">
              <InputDefault
                label=""
                isTotalize={false}
                value={valueEdit}
                onChange={(e) => setValueEdit(e.target.value)}
                onKeyDownCapture={(e) => e.keyCode === 13 && onAdd()}
              />
              <IoMdCloseCircle
                className="ml-1"
                size={18}
                onClick={() => {
                  onDel(index), setEdit(-1);
                }}
              />
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export default ListTask;
