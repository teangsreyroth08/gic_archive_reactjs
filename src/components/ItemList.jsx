import { ListIcon } from "../icons/Listicon";
import { GridIcon } from "../icons/GridIcon";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import ItemCard2 from "./ItemCard2";
import { useQuery } from "@apollo/client";
import GridLoading from "./loading/GridLoading";

const ItemList = ({ query, variables, title, type }) => {
  let [grid, setGrid] = useState(true);
  const [data, setData] = useState([]);
  const { loading, error, data: response } = useQuery(query, { variables });

  useEffect(() => {
    if (typeof response !== 'undefined') {
      const resArray = Object.entries(response);
      const [[_, res]] = resArray;
      setData(res.data);
    }
  }, [query, variables, loading, response]);

  if (loading) {
    return <GridLoading />; // Render loading state
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Render error state
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[50vh]">
        <img className="w-[100px]" src='https://media.tenor.com/zLE8iO4GSAcAAAAi/ghost-photographer.gif' alt="loading..." />
        <p className="text-2xl text-gray-700">No document found.</p>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between my-4 w-full">
        {title}
        <div className="sm:flex items-center hidden">
          <button
            onClick={() => setGrid(true)}
            className={
              grid ? " border border-primary text-primary rounded-lg mr-1" : ""
            }
          >
            <GridIcon height={25} width={25} />
          </button>
          <button
            onClick={() => setGrid(false)}
            className={
              grid ? "" : " border border-primary text-primary rounded-lg ml-1"
            }
          >
            <ListIcon height={25} width={25} />
          </button>
        </div>
      </div>
      {grid ? (
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
          {data?.map((item, index) => (
            <ItemCard2 document={item} key={index} /> // Don't forget to add key prop
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 place-items-center">
          {data?.map((item, index) => (
            <ItemCard document={item} key={index} /> // Don't forget to add key prop
          ))}
        </div>
      )}
    </>
  );
}

export default ItemList;
