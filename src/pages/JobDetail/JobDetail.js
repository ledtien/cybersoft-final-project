import { Breadcrumb, Collapse, Rate, Tooltip } from "antd";
import React, { createElement, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { bookingJobAction, getJobDetail } from "../../redux/actions/JobsAction";
import {
  StarFilled,
  FieldTimeOutlined,
  SyncOutlined,
  CaretRightFilled,
} from "@ant-design/icons";
import { Comment, Avatar } from "antd";
import { getCommentsByJobAction } from "../../redux/actions/CommentsAction";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { Tabs } from "antd";

export default function JobDetail() {
  const { jobDetail } = useSelector((state) => state.JobsReducer);
  const { comments } = useSelector((state) => state.CommentsReducer);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getJobDetail(id));
    dispatch(getCommentsByJobAction(id));
  }, [id]);

  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  console.log({ jobDetail });

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <section>
      {/* <nav
        className="w-full"
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dadbdd",
        }}
      >
        <div className="container px-12 mx-auto flex justify-start items-center p-4">
          <a
            href="#overview"
            className="text-gray-500 font-semibold mr-7 hover:underline underline-offset-8 hover:text-black"
          >
            Overview
          </a>
          <a
            href="#jobDescription"
            className="text-gray-500 font-semibold mr-7 hover:underline underline-offset-8 hover:text-black"
          >
            Description
          </a>
          <a
            href="#about"
            className="text-gray-500 font-semibold mr-7 hover:underline underline-offset-8 hover:text-black"
          >
            About the seller
          </a>
          <a
            href="#faq"
            className="text-gray-500 font-semibold mr-7 hover:underline underline-offset-8 hover:text-black"
          >
            FAQ
          </a>
          <a
            href="#comment"
            className="text-gray-500 font-semibold mr-7 hover:underline underline-offset-8 hover:text-black"
          >
            Reviews
          </a>
        </div>
      </nav> */}

      <div className="py-6">
        <div className="container px-36 mx-auto flex ">
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <NavLink to={`/`} className="text-base text-blue-600">
                  Fiverr
                </NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to={`/`} className="text-base text-blue-600">
                  {jobDetail?.subType?.name}
                </NavLink>
              </Breadcrumb.Item>
            </Breadcrumb>

            <div className="mb-4" id="overview">
              <h3 className="text-3xl text-gray-700 mt-2 font-bold">
                {jobDetail.name}
              </h3>
              <div className="flex">
                <div className="mr-5">
                  <img
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Avatar"
                    className="rounded-full"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="font-semibold mr-3 text-sm">
                  {jobDetail.userCreated}
                </span>
                <p className="text-yellow-500 text-sm font-semibold mr-2">
                  Top Rated Seller
                </p>
                <div className="border-l-2 border-gray-400 text-md font-semibold h-5">
                  {" "}
                  <span className="text-yellow-500 ml-2">
                    {jobDetail.rating}
                    <StarFilled className="relative bottom-1 ml-1" />
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex items-center font-semibold text-sm mt-3">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/56ff3db8ae625ba1d6493c3c250c5919-1625663632464/3-Trophy-70_alpha.gif"
                alt="trophy-logo"
                width={40}
              />
              People keep coming back!
              <span className="font-normal ml-2">
                This seller has many repeat buyers.
              </span>
            </div>
            <div>
              <img
                src={jobDetail.image}
                alt=""
                className="lg:h-96 md:h-36 w-full object-fill object-center"
              />
            </div>
            <div className="mt-16 text-gray-500" id="jobDescription">
              <h3 className="text-2xl text-gray-700 font-bold">
                About This Gig
              </h3>
              <div>
                Hi,I'm a passionate flat graphic designer, and a creative
                thinker. I have been working on Fiverr for the last 4 years and
                have successfully developed 50K+ Brand logos and worked for{" "}
                <b>EA Sports, Fiverr Internal communication, etc</b>
                <p>
                  <b>
                    Exclusively Premium, Simple, Minimal, Line art, Typography
                    Brand logo design are here to blow you away
                  </b>
                </p>
                You are paying a quality gig to receive perfect quality service
                and design. <br />
                <p>
                  {" "}
                  <b>My Recent Work Sample:</b> https://flic.kr/s/aHskLztmPf
                </p>
                <p>
                  Note: This is a highly recommended gig for line art, monogram,
                  or text-based/badge logo only. This doesn't include Mascot or
                  Complex detailed illustration.
                </p>
                <ol className="list-decimal ml-5">
                  {" "}
                  <strong> Why me?</strong>
                  <li className="pl-2">
                    <strong>Most Rated and Trusted Seller</strong>
                  </li>
                  <li className="pl-2">
                    <strong>Reliable and Quick communication</strong>
                  </li>
                  <li className="pl-2">
                    <strong>Printable and HQ File size</strong>
                  </li>
                  <li className="pl-2">
                    <strong>Minimalist Logo and Flat Logo Expert</strong>
                  </li>
                </ol>
                <ul className="list-disc  ml-5">
                  This gig assures you all the print resolution solutions and a
                  brand face for your company
                  <li className="pl-2">
                    <strong>Copyrights will be with the customer.</strong>
                  </li>
                  <li className="pl-2">
                    <strong>
                      Get the source and editable files ai,eps,psd,pdf and
                      High-quality files.
                    </strong>
                  </li>
                </ul>
                <p>
                  Minimalist Logo | Minimal | Typography | Professional | Modern
                  | Text | Vintage | Badge | Hand drawn | Feminine | Signature |
                  Logo Design
                </p>
                <p>
                  <i>Get a free consultation.</i> <br />
                  <strong>Sounds Interesting? Let's have a word!</strong> <br />
                  Always happy to help! Order
                </p>
              </div>
              <hr />
              <div className="flex mt-5">
                <div className="w-56">
                  <p className="mb-0">Style</p>
                  <p className="text-gray-700">Minimalist</p>
                </div>
                <div>
                  <p className="mb-0">File format</p>
                  <p className="text-gray-700">AI, JPG, PDF, PNG, EPS, SVG</p>
                </div>
              </div>
            </div>
            <div id="about" className="mt-16">
              <h3 className="text-2xl text-gray-700 font-bold">
                About the Seller
              </h3>
              <div className="flex mt-5 items-center">
                <div>
                  <img
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Avatar"
                    className="rounded-full"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="ml-10">
                  <p className="m-0 font-semibold">{jobDetail.userCreated}</p>
                  <p className="mb-0 text-gray-500">Jobs</p>
                  <div className="mb-5">
                    <span className="text-yellow-500 ml-2">
                      {jobDetail.rating}
                      <StarFilled className="relative bottom-1 ml-1" />
                    </span>
                  </div>
                  <button className="border-2 bg-white rounded-md border-black px-3 py-2 hover:bg-gray-500 hover:text-white hover:border-gray-500">
                    Contact Me
                  </button>
                </div>
              </div>
              <div id="faq" className="mt-16">
                <h3 className="text-2xl  font-bold">FAQ</h3>
                <div className="text-gray-700 font-semibold">
                  <Collapse ghost accordion expandIconPosition="right">
                    <Panel
                      header="How can we get started?"
                      key="1"
                      className="text-base text-gray-600"
                    >
                      <p className="text-base text-gray-500 font-normal">
                        It's very easy! After ordering my gig you will see some
                        basic questions where I will determine your exact needs
                        and will provide you designs based upon it.
                      </p>
                    </Panel>
                    <hr />
                    <Panel
                      header="What is Source Files and how they are helpful?"
                      key="2"
                      className="text-base text-gray-600"
                    >
                      <p className="text-base text-gray-500 font-normal">
                        Source files are the original files of the logo design
                        by which you can edit/resize the logo to any size
                        without losing quality using the Adobe Illustrator
                        software. They are available in Ai,EPS,PSD,PDF,PNG,SVG
                        formats. I would recommend selecting a Standard/Premium
                        package for this benefit.
                      </p>
                    </Panel>
                    <hr />
                    <Panel
                      header="What is Social media kit?"
                      key="3"
                      className="text-base text-gray-600"
                    >
                      <p className="text-base text-gray-500 font-normal">
                        The social media kit is Covers for different social
                        media platforms like Facebook, Twitter, YouTube, and
                        GooglePlus. The logo which I design will be featured on
                        those covers and they are in social media platform
                        friendly size and dimensions. It is offered in Standard
                        and Premium Package.{" "}
                      </p>
                    </Panel>
                    <hr />
                    <Panel
                      header="What is Stationary Designs?"
                      key="4"
                      className="text-base text-gray-600"
                    >
                      <p className="text-base text-gray-500 font-normal">
                        Stationery Designs are the set of Business card and
                        Letterhead which is designed symmetrically to your logo
                        design's overall theme and colors. It comes in direct
                        Print-Ready files in RGB/CMYK as per your need. It is
                        being offered under only PREMIUM PACKAGE.{" "}
                      </p>
                    </Panel>
                    <hr />
                    <Panel
                      header="Which package should I choose to get an outstanding logo?"
                      key="5"
                      className="text-base text-gray-600"
                    >
                      <p className="text-base text-gray-500 font-normal">
                        To get an outstanding logo, I would recommend you choose
                        the standard/premium package because it includes a
                        unique design process that gives the best aesthetically
                        pleasing concept.
                      </p>
                    </Panel>
                    <hr />
                    <Panel
                      header="Do you provide any other graphical services?"
                      key="6"
                      className="text-base text-gray-600"
                    >
                      <p className="text-base text-gray-500 font-normal">
                        That's a great question! I do provide Label Design,
                        Brand Style Guide Design, Instagram Posts Design, and
                        much more. Please feel free to inquire more
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              </div>
              <div className="mt-16">
                <h3 className="text-2xl  font-bold">
                  {" "}
                  Rating:
                  <Rate
                    allowHalf
                    value={(jobDetail.rating * 5) / 10}
                    disabled
                    className="relative left-2"
                  />
                  <span className="ml-2 text-yellow-500 text-md">
                    {" "}
                    {jobDetail.rating}
                  </span>
                </h3>
              </div>

              <div className="mt-16" id="comment">
                <h3 className="text-2xl font-bold">Comments:</h3>
                <hr />
                <div>
                  {comments?.map((comment, index) => {
                    return (
                      <div key={index}>
                        <Comment
                          actions={actions}
                          author={comment.user.name}
                          avatar={
                            <Avatar
                              src="https://joeschmoe.io/api/v1/random"
                              alt={comment.user.name}
                            />
                          }
                          content={<p>{comment.content}</p>}
                          datetime={
                            <Tooltip
                              title={moment().format("YYYY-MM-DD HH:mm:ss")}
                            >
                              <span>{moment().fromNow()}</span>
                            </Tooltip>
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/6 sticky top-0 z-10 h-full ml-28">
            <div style={{ border: "1px solid #d9d9d9" }}>
              <Tabs
                defaultActiveKey="1"
                size={`large`}
                style={{ marginBottom: 32 }}
                centered
                tabBarGutter={50}
              >
                <TabPane tab="BASIC" key="1">
                  <div className="p-5">
                    <h3 className="text-3xl font-bold">{`$${jobDetail.price}`}</h3>
                    <p className="text-gray-500 font-semibold">
                      Create a BASIC product ${jobDetail?.subType?.name} job
                    </p>
                    <div className="text-gray-600 font-semibold mb-5">
                      <FieldTimeOutlined className="relative bottom-1 text-base" />{" "}
                      <span className="ml-1 mr-5">6 Days Delivery</span>
                      <SyncOutlined className="relative bottom-1 text-base" />{" "}
                      <span className="ml-1">3 Revisions</span>
                    </div>
                    <ul>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        2 concepts included
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        Logo transparency
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        Responsive Design
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        Design Customization
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        5 Products
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        E-Commerce Functionality
                      </li>
                    </ul>
                  </div>
                </TabPane>
                <TabPane tab="STANDARD" key="2">
                  <div className="p-5">
                    <h3 className="text-3xl font-bold">{`$${
                      jobDetail.price * 5
                    }`}</h3>
                    <p className="text-gray-500 font-semibold">
                      Create a STANDARD product ${jobDetail?.subType?.name} job
                    </p>
                    <div className="text-gray-600 font-semibold mb-5">
                      <FieldTimeOutlined className="relative bottom-1 text-base" />{" "}
                      <span className="ml-1 mr-5">12 Days Delivery</span>
                      <SyncOutlined className="relative bottom-1 text-base" />{" "}
                      <span className="ml-1">6 Revisions</span>
                    </div>
                    <ul>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        4 concepts included
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        Logo transparency
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        Responsive Design
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        Design Customization
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        10 Products
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        E-Commerce Functionality
                      </li>
                    </ul>
                  </div>
                </TabPane>
                <TabPane tab="PREMIUM" key="3">
                  <div className="p-5">
                    <h3 className="text-3xl font-bold">{`$${
                      jobDetail.price * 10
                    }`}</h3>
                    <p className="text-gray-500 font-semibold">
                      Create a PREMIUM product ${jobDetail?.subType?.name} job
                    </p>
                    <div className="text-gray-600 font-semibold mb-5">
                      <FieldTimeOutlined className="relative bottom-1 text-base" />{" "}
                      <span className="ml-1 mr-5">20 Days Delivery</span>
                      <SyncOutlined className="relative bottom-1 text-base" />{" "}
                      <span className="ml-1">Unlimited Revisions</span>
                    </div>
                    <ul>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        7 concepts included
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        Logo transparency
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        Responsive Design
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        Design Customization
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        10 Products
                      </li>
                      <li className="text-gray-500 font-semibold">
                        <svg
                          className="inline mr-2"
                          width="15"
                          height="15"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#009933"
                        >
                          <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                        </svg>
                        E-Commerce Functionality
                      </li>
                    </ul>
                  </div>
                </TabPane>
              </Tabs>
              <div className="flex justify-center items-center mb-5">
                <button
                  className="bg-green-500 rounded-md w-5/6 py-3 text-white hover:bg-green-600"
                  onClick={() => {
                    console.log(id);
                    dispatch(bookingJobAction(id));
                  }}
                >
                  <span className="font-semibold">Continue</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
