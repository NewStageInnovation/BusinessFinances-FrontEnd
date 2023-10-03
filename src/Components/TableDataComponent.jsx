import React from "react";
import TableDataStyle from "../Styles/TableDataComponent.css";
import { Table } from "evergreen-ui";
import { AiOutlineEdit } from "react-icons/ai";

function TableDataComponent(props) {
  const data = props.data ? props.data : [];
  const editButton = props.editButton ? true : props.editButton;

  return (
    <div className="table-data-container">
      <Table>
        <Table.Head>
          {data.length > 0 &&
            Object.keys(data[0]).map((key, index) => {
              if (key !== "id" && key !== "_id"){
                return <Table.TextHeaderCell key={index}>{key}</Table.TextHeaderCell>
              }
            }
            )}
          {editButton && (
            <Table.TextHeaderCell
              flexBasis={50}
              flexShrink={0}
              flexGrow={0}
            ></Table.TextHeaderCell>
          )}
        </Table.Head>
        <Table.Body height={240}>
          {data.map((data, index) => (
            <Table.Row key={index}>
              {Object.keys(data).map((key, index) => {
                const value = data[key]
                if (key !== "id" && key !== "_id"){
                  return <Table.TextCell key={index}>{value}</Table.TextCell>
                }
              }
              )}
              {editButton && (
                <Table.TextCell flexBasis={50} flexShrink={0} flexGrow={0}>
                  <div
                    className="edit-button"
                    onClick={() => {
                      console.log("Se clickeo el edit: ", data);
                    }}
                  >
                    <AiOutlineEdit />
                  </div>
                </Table.TextCell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TableDataComponent;
