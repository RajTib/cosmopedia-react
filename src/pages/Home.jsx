import { useState, useEffect } from "react";


export default function Home() {
    return (
        <main id="content" role="main">
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60vh",
                flexDirection: "column",
                gap: "1rem"
            }}>
                <div style={{ fontSize: "3rem" }}>🪐</div>
                <div style={{ color: "#4a9eff" }}>
                    Loading Cosmopedia...
                </div>
            </div>
        </main>
    );
}
