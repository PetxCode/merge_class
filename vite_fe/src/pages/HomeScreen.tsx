import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdArrowForward, MdBookmark, MdLink } from "react-icons/md";
import { getWebData, likeWebData } from "../api/API";

const HomeScreen = () => {
  //   const data = Array.from({ length: 12 });
  const [data, setData] = useState([]);

  useEffect(() => {
    getWebData().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className="mt-10 flex flex-wrap gap-4 justify-center">
      {data?.map((props: any) => (
        <div className="w-[300px] border rounded-lg h-[430px] p-4 text-[12px]">
          <div className="flex justify-between items-center">
            <img className="w-10 h-10 rounded-full border" />
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="text-[20px] font-bold mt-5">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur
          </div>

          <div className="flex">
            <div className=" border px-2 rounded-md mt-2 ">#Man</div>
          </div>

          <div className="flex mt-2 mb-1 items-center gap-2">
            <p>20Mins Ago</p>
            <div className="w-1 h-1 bg-black rounded-full" />
            <p>2Mins Read</p>
          </div>

          <img
            src={props?.image}
            className="w-full h-[140px] object-cover border rounded-lg"
          />

          <div className="flex w-full justify-between items-center mt-1">
            <div
              className="flex items-center gap-2 text-[25px] hover:bg-purple-100 rounded-full px-4 py-0 "
              onClick={() => {
                likeWebData(props?._id);
              }}
            >
              <div>
                <AiOutlineLike />
              </div>
              <div className="text-[15px] font-semibold mt-1">
                {props?.likes?.length}
              </div>
            </div>
            <div className="flex items-center gap-4 text-[25px]">
              <MdBookmark />
              <MdLink />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
