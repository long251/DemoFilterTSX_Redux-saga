// import { Button } from '@shopify/polaris';
// import React from 'react';

// function AccountPage(props: any) {
//     let {currentPage, setCurrentPage} = props;
//     let total = useSelector
//     return (
//         <div>
//             <div
//           style={{
//             display: "flex",
//             justifyContent: "right",
//             padding: "10px 10px",
//             alignItems: "center",
//             gap: "5px",
//           }}
//         >
//           {/* nút trờ về trước */}
//           <div className="div1">
//             <div className="Button-Custom--PaginationPrevNext">
//               <Button
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage(currentPage - 1)}
//               >
//                 Prev
//               </Button>
//             </div>
//           </div>
//           {/* từ CP = 3 mới hiện nút trang 1 - div2, set mặc định luôn hiển thị trang 1 */}
//           {currentPage > 2 ? (
//             <div className={`div2`}>
//               <div className="Button-Custom--PaginationCurrentTruocSau">
//                 <Button onClick={() => setCurrentPage(1)}>1</Button>
//               </div>
//             </div>
//           ) : null}
//           {/* CP=2,3,4,... hiển thị div3 với cp-1 */}
//           {currentPage > 1 ? (
//             <div className={`div3`}>
//               <div className="Button-Custom--PaginationCurrentTruocSau">
//                 <Button onClick={() => setCurrentPage(currentPage - 1)}>
//                   {`${currentPage - 1}`}
//                 </Button>
//               </div>
//             </div>
//           ) : null}
//           {/* CP=page hiển thị trang hiện tại */}
//           <div className={`div4`}>
//             <div className="Button-Custom--PaginationCurrentPage">
//               <Button>{`${currentPage}`}</Button>
//             </div>
//           </div>
//           {/* hiển thị các trang nhỏ hơn tổng -1 vì số cuối của tổng sẽ là disabled */}
//           {currentPage < total - 1 ? (
//             <div className="div5">
//               <div className="Button-Custom--PaginationCurrentTruocSau">
//                 <Button onClick={() => setCurrentPage(currentPage + 1)}>
//                   {`${currentPage + 1}`}
//                 </Button>
//               </div>
//             </div>
//           ) : null}

//           {currentPage < total - 2 ? (
//             <div className="div6" style={{ padding: "10px 10px" }}>
//               ...
//             </div>
//           ) : null}

//           {currentPage < total ? (
//             <div className="div7">
//               <div className="Button-Custom--PaginationCurrentTruocSau">
//                 <Button onClick={() => setCurrentPage(total)}>
//                   {`${total}`}
//                 </Button>
//               </div>
//             </div>
//           ) : null}

//           <div className={`div8`}>
//             <div className="Button-Custom--PaginationPrevNext">
//               <Button
//                 onClick={() => setCurrentPage(currentPage + 1)}
//                 disabled={currentPage === total}
//               >
//                 Next
//               </Button>
//             </div>
//           </div>
//         </div>
//         </div>
//     );
// }

// export default {AccountPage};
export {};