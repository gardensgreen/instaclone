
const Followers = () => {
    return (
        <>
            <h1>Followers</h1>
            <div>
                <ul>
                {for each follower in followers}
                </ul>
            </div>
        </>
    )
}
        // <div className="clickable-element-userPage" style={{ display: "none", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
        //     <div onClick={clickedFollowers} style={{ bottom: "0", left: "0", position: "fixed", right: "0", top: "0", zIndex: "3", background: "black", opacity: "0.5" }}></div>
        //     <div id="followersDiv" style={{ display: "none", width: "400px", height: "289px", margin: "20px", zIndex: "4" }}>
        //         <div style={{ backgroundColor: "rgba(var(--f23,255,255,255),1)", borderRadius: "12px", overflow: "hidden" }}>
        //             <div style={{ width: "400px", height: "43px" }}>
        //                 <div style={{ width: "400px", height: "43px", borderBottom: "1px solid rgba(var(--b6a,219,219,219),1)", display: "flex", flexDirection: "row" }}>
        //                     <div style={{ width: "48px", height: "42px" }}></div>
        //                     <h1 style={{ display: "flex", alignItems: "center", fontSize: "16px", fontWeight: "600", justifyContent: "center", lineHeight: "24px", textAlign: "center" }}>Followers</h1>
        //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "42px" }}>
        //                         <button style={{ background: "0 0", border: "0", cursor: "pointer", padding: "8px", color: "rgba(var(--i1d,38,38,38),1)", fontSize: "14px", lineHeight: "18px", width: "40px", height: "40px" }} type="button">
        //                             <div style={{ width: "24px", height: "24px" }}>
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
        //                                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        //                                 </svg>
        //                             </div>
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div style={{ width: "400px", height: "246px", borderRadius: "12px", display: "block", overflowY: "scroll" }}>
        //                 <ul style={{ background: "rgba(var(--d87,255,255,255),1)", display: "flex", flexDirection: "column", listStyle: "none" }}>
        //                     <div>

        //                     </div>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>