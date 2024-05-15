import { useContext } from "react";
import { FaPlus, FaReact } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { RiDiscussLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GlobalContext } from "../global/ContextProvider";

const SiderScreen = () => {
  const siderData = [
    {
      title: "Squads",
      data: [
        {
          icon: (
            <>
              <FaReact />
            </>
          ),
          title: "Public Squads",
          url: "#",
        },
        {
          icon: <FaPlus />,
          title: "New Squads",
          url: "#",
        },
      ],
    },
    {
      title: "Discover",
      data: [
        {
          icon: <RiDiscussLine />,
          title: "Discussions",
          url: "#",
        },
        {
          icon: (
            <>
              <FaReact />
            </>
          ),
          title: "Pupolar",
          url: "#",
        },
        {
          icon: (
            <>
              <FaReact />
            </>
          ),
          title: "Most upVoted",
          url: "#",
        },
        {
          icon: (
            <>
              <FaReact />
            </>
          ),
          title: "Search",
          url: "#",
        },
      ],
    },
    {
      title: "Contribute",
      data: [
        {
          icon: (
            <>
              <FaReact />
            </>
          ),
          title: "Community Picks",
          url: "#",
        },
        {
          icon: (
            <>
              <FaReact />
            </>
          ),
          title: "Suggest new source",
          url: "#",
        },
      ],
    },
    {
      title: "Manage",
      data: [
        {
          icon: (
            <>
              <FaReact />
            </>
          ),
          title: "Bookmarks",
          url: "/bookmark",
        },
        {
          icon: (
            <>
              <FaReact />
            </>
          ),
          title: "History",
          url: "#",
        },
        {
          icon: (
            <>
              <RiDiscussLine />
            </>
          ),
          title: "Pause new tab",
          url: "#",
        },
        {
          icon: (
            <>
              <FaReact />
            </>
          ),
          title: "Customize",
          url: "#",
        },
      ],
    },
  ];

  const buttData = [
    {
      icon: (
        <>
          <FaReact />
        </>
      ),
      title: "Docs",
      url: "#",
    },
    {
      icon: (
        <>
          <RiDiscussLine />
        </>
      ),
      title: "ChangeLogs",
      url: "#",
    },

    {
      icon: (
        <>
          <MdFeedback />
        </>
      ),
      title: "FeedBack",
      url: "#",
    },
  ];

  const { toggle } = useContext(GlobalContext);

  return (
    <div className="flex flex-col h-full py-3 border-r ">
      <Link
        to="/"
        className="flex text-[12px] justify-start items-center hover:bg-slate-100 cursor-pointer py-2 transition-all duration-300 gap-2"
      >
        <img
          src="https://cdn.dribbble.com/userupload/14498596/file/original-a44257fc91b842d261fde5ee0257ff35.png?resize=320x240&vertical=center"
          className="w-5 h-5 rounded-md object-cover ml-2"
        />
        <div>My Feed</div>
      </Link>

      <div>
        {siderData?.map((props) => (
          <div>
            <div
              className={`mt-3 ml-1 ${
                toggle ? "text-[18px]" : "text-[13px] font-medium"
              }`}
            >
              {" "}
              {props.title}
            </div>
            <div>
              {" "}
              {props?.data?.map((el) => (
                <Link
                  key={props.title}
                  to={el.url}
                  className="flex text-[12px] justify-start items-center hover:bg-slate-100 cursor-pointer py-2 transition-all duration-300 gap-2 pl-4 mb"
                >
                  <div className="text-[20px] text-gray-600">{el.icon}</div>
                  {toggle && <div className="font-medium">{el.title}</div>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1" />
      <div>
        {buttData?.map((el: any) => {
          return (
            <Link
              key={el.title}
              to={el.url}
              className="flex text-[12px] justify-start items-center hover:bg-slate-100 cursor-pointer py-2 transition-all duration-300 gap-2 pl-4"
            >
              <div className="text-[20px] text-gray-600">{el.icon}</div>
              {toggle && <div className="font-medium">{el.title}</div>}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SiderScreen;
