"use strict";
console.log("%cSchool At Midnight🌚","font-size: 3rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background-color: black; border-radius: 20px");
console.log("%cReport any missed CSS or bugs to the github: https://github.com/CSSisHard/school-at-midnight ","font-size: 1.5rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background-color: black; border-radius: 20px")

if (localStorage.getItem("darkmode") == null) {
    localStorage.setItem("darkmode","false");   
}

if (localStorage.getItem("themeSwitcherDimension") == null) {
    localStorage.setItem("themeSwitcherDimensions","{width: 150,height: 27}");
}


var darkmodestate = Boolean(localStorage.getItem("darkmode"));

var style = document.createElement("style");
style.innerHTML = `

body, nav, .joJglb, .ETRkCe {
    color: #fff;
    background-color: var(--gray);
}
.lXuxY .u73Apc {
    border-color: #373737;
}

a {
    color: aqua;
}

*, h2, p, .apFsO.onkcGd, .apFsO.onkcGd:visited, .K6Ovqd, .Evt7cb, .Evt7cb:visited, .WOPwXe, .ViCi4, .tLDEHd, .dDKhVc, .asQXV, .rpo4wf, .J1raN:hover, .EZrbnd, .IqJTee, .A6dC2c, .DShyMc-MTkwMDQyNzU2MzY0 .VBEdtc-Wvd9Cc:hover, .DShyMc-MTkwMDQyNzU2MzY0.MymH0d:hover .VBEdtc-Wvd9Cc, .DShyMc-MTkwMDQyNzU2MzY0 .MymH0d:hover .VBEdtc-Wvd9Cc, .NjE5zd, .DShyMc-AaTFfe.VnOHwf-Tvm9db, .DShyMc-AaTFfe .VnOHwf-Tvm9db, .DShyMc-AaTFfe.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTg0MjQ2MDIxMDky.VnOHwf-Tvm9db, .DShyMc-MTg0MjQ2MDIxMDky .VnOHwf-Tvm9db, .DShyMc-MTg0MjQ2MDIxMDky.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2 .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2 .VnOHwf-Tvm9db, .DShyMc-MTg5OTc2MTkwMTI2.CNpREd .VnOHwf-Tvm9db, .xSP5ic, .Rq5Gcb, .ksaOtd, .DShyMc-MTcwNjk5NzM4Mjkx.VnOHwf-Tvm9db, .DShyMc-MTcwNjk5NzM4Mjkx .VnOHwf-Tvm9db, .DShyMc-MTcwNjk5NzM4Mjkx.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4 .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4 .VnOHwf-Tvm9db, .DShyMc-MTYxNDkyMTI1MTg4.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTIzNjUwOTUwMjY5.VnOHwf-Tvm9db, .DShyMc-MTIzNjUwOTUwMjY5 .VnOHwf-Tvm9db, .DShyMc-MTIzNjUwOTUwMjY5.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTIzMDAxMzIxMDE1.VnOHwf-Tvm9db, .DShyMc-MTIzMDAxMzIxMDE1 .VnOHwf-Tvm9db, .DShyMc-MTIzMDAxMzIxMDE1.CNpREd .VnOHwf-Tvm9db, .DShyMc-MTIzMjUzMzg1OTU0 .VBEdtc-Wvd9Cc:hover, .DShyMc-MTIzMjUzMzg1OTU0.MymH0d:hover .VBEdtc-Wvd9Cc, .DShyMc-MTIzMjUzMzg1OTU0 .MymH0d:hover .VBEdtc-Wvd9Cc, .DShyMc-MTIzMjUzMzg1OTU0.VnOHwf-Tvm9db, .DShyMc-MTIzMjUzMzg1OTU0 .VnOHwf-Tvm9db, .DShyMc-MTIzMjUzMzg1OTU0.CNpREd .VnOHwf-Tvm9db {
    color: #fff;
    box-shadow: none;
}

wZTANe {
    color: white !important;    
}

.Aopndd, .d4Fe0d, .GWZ7yf, .hgjBDc, .Xi8cpb:hover .LlcfK, .JPdR6b, .gHz6xd.rZXyy:not(.kKn9Nc):not(.u0dx8e):hover, .I7OXgf, .DShyMc-MTc0OTQxMzAwMzk3.bFjUmb-Ysl7Fe, .DShyMc-MTc0OTQxMzAwMzk3 .bFjUmb-Ysl7Fe, .DShyMc-MTM5ODA0NDQ5MjUz.bFjUmb-Ysl7Fe, .DShyMc-MTM5ODA0NDQ5MjUz .bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1.bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D.ndcsBf .idtp4e {
    background-color: var(--gray);
    border: .0625rem solid #373737;
    box-shadow: none;
}
.MHxtic:hover, .ncFHed, .EHzcec, .MHxtic.ndcsBf, .ybOdnf.iWO5td, .uQ3ESd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover.j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover.idtp4e, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover .j6KDAd, .DShyMc-MTIzMDAxMzIxMDE1 .ZoT1D:hover .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover.j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover.idtp4e, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover .j6KDAd, .DShyMc-MTg0MTM1MDc2OTI0 .ZoT1D:hover .idtp4e {
    /* to do assignments */
    background: none;
    background-color: var(--gray);
    box-shadow: none;
}
.DShyMc-MTg0MjQ2MDIxMDky.bFjUmb-Ysl7Fe, .DShyMc-MTg0MjQ2MDIxMDky .bFjUmb-Ysl7Fe {
    background-color: var(--gray);
}
.oBSRLe, .Lzdwhd-BrZSOd, .lziZub, .lziZub:visited {
    color: #8d8d8d;
}
.s2g3Xd, .PeGHgb.Q8U8uc .Ono85c+.oh9CFb, .PeGHgb.Q8U8uc .ruTJle+.fETHd, .ar1wE .eqqrO, .ySjuvd .eqqrO, .E5f6Vd, .ZNE4y, .ycbm1d, .LKqFXc, .P02DYb, .tUJKGd:not(:first-child), .O9YpHb {
    border-top: .0625rem solid #373737;
}
.joJglb, .u73Apc, .MHxtic:not(:last-child) {
    border-bottom: .0625rem solid #373737;
}
.oleV8d, .DShyMc-MTkwMDQyNzU2MzY0 .AeAAkf:not(.RDPZE):hover, .DShyMc-MTkwMDQyNzU2MzY0 .AeAAkf:not(.RDPZE).u3bW4e, .DShyMc-MTkwMDQyNzU2MzY0 .BEAGS:not(.RDPZE):hover, .DShyMc-MTkwMDQyNzU2MzY0 .BEAGS:not(.RDPZE).u3bW4e, .BEAGS:hover, .BEAGS, .Xp0OCe, .QTD2uf {
    border: .0625rem solid #373737;
}
.BOW64 {
    border-right: .0625rem solid #373737;
}
.SZ0kZe, .WMQb5e .oBSRLe, .MHxtic.ndcsBf, .d4Fe0d.s3BYNe {
    border: none;
}
.rZXyy.YwNp1, .rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):hover, .rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):focus, .MHxtic.ndcsBf {
    box-shadow: none;
}
.gHz6xd {
    margin: .0625rem 1.5625rem 1.5625rem .0625rem;
}
.DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover.j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover.idtp4e, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover .j6KDAd, .DShyMc-MTkwMDQyNzU2MzY0 .ZoT1D:hover .idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover.j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover.idtp4e, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover .j6KDAd, .DShyMc-MTg0MjQ2MDIxMDky .ZoT1D:hover .idtp4e, .z80M1.FwR7Pc, .DShyMc-MTg0MTM1MDc2OTI0.bFjUmb-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .bFjUmb-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0 .QkA63b:not(.RDPZE), .DShyMc-MTkwMDQyNzU2MzY0 .Y5sE8d:not(.RDPZE), .ncFHed .MocG8c.KKjvXb, .DShyMc-AaTFfe .bFjUmb-Wvd9Cc.kRqvHe, .ry3kXd .MocG8c.KKjvXb, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover.j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover .j6KDAd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D:hover .idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTcwNjk5NzM4Mjkx .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover.j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover.idtp4e, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover .j6KDAd, .DShyMc-MTIzMjUzMzg1OTU0 .ZoT1D:hover .idtp4e {
    background-color: #424242;
}
.fWf7qe .Yalane, .hqfVKd, .fWf7qe:not(.RDPZE):hover .Yalane, textarea, .DShyMc-AaTFfe .UISY8d-Ysl7Fe:hover, .DShyMc-AaTFfe.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .UISY8d-Ysl7Fe:hover, .DShyMc-AaTFfe.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MjQ2MDIxMDky .UISY8d-Ysl7Fe:hover, .DShyMc-MTg0MjQ2MDIxMDky.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MjQ2MDIxMDky .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .UISY8d-Ysl7Fe:hover, .DShyMc-MTg5OTc2MTkwMTI2.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .UISY8d-Ysl7Fe:hover, .DShyMc-MTg5OTc2MTkwMTI2.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTg0MTM1MDc2OTI0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-AaTFfe.bFjUmb-Ysl7Fe, .DShyMc-AaTFfe .bFjUmb-Ysl7Fe, .DShyMc-AaTFfe .bFjUmb-Ysl7Fe.kRqvHe, .DShyMc-AaTFfe.bFjUmb-Wvd9Cc, .DShyMc-AaTFfe .bFjUmb-Wvd9Cc, .DShyMc-AaTFfe.CNpREd.bFjUmb-Wvd9Cc, .DShyMc-AaTFfe.CNpREd .bFjUmb-Wvd9Cc, .DShyMc-MTkwMDQyNzU2MzY0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTkwMDQyNzU2MzY0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0.bFjUmb-Ysl7Fe, .DShyMc-MTkwMDQyNzU2MzY0 .bFjUmb-Ysl7Fe, .IzVHde, .DShyMc-MTkwMTE1MjU3MTA0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTkwMTE1MjU3MTA0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMTE1MjU3MTA0 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover.idtp4e, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover.j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover.idtp4e, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover .j6KDAd, .DShyMc-MTkwMTE1MjU3MTA0 .ZoT1D:hover .idtp4e, .DShyMc-MTkwMTE1MjU3MTA0.bFjUmb-Ysl7Fe, .DShyMc-MTkwMTE1MjU3MTA0 .bFjUmb-Ysl7Fe, .DShyMc-MTcwNjk5NzM4Mjkx .UISY8d-Ysl7Fe:hover, .DShyMc-MTcwNjk5NzM4Mjkx.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTcwNjk5NzM4Mjkx .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4.bFjUmb-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4 .bFjUmb-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf.boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf.idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf .boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf.boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf.idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf .boxOzd, .DShyMc-MTYxNDkyMTI1MTg4 .ZoT1D.ndcsBf .idtp4e, .DShyMc-MTYxNDkyMTI1MTg4 .UISY8d-Ysl7Fe:hover, .DShyMc-MTYxNDkyMTI1MTg4.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTYxNDkyMTI1MTg4 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5 .UISY8d-Ysl7Fe:hover, .DShyMc-MTIzNjUwOTUwMjY5.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5.bFjUmb-Ysl7Fe, .DShyMc-MTIzNjUwOTUwMjY5 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .UISY8d-Ysl7Fe:hover, .DShyMc-MTIzMDAxMzIxMDE1.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzMDAxMzIxMDE1 .MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .P3W0Dd-Ysl7Fe:focus, .DShyMc-MTg0MTM1MDc2OTI0.maXJsd:focus .P3W0Dd-Ysl7Fe, .DShyMc-MTg0MTM1MDc2OTI0 .maXJsd:focus .P3W0Dd-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2.bFjUmb-Ysl7Fe, .DShyMc-MTg5OTc2MTkwMTI2 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0.bFjUmb-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0 .bFjUmb-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0 .UISY8d-Ysl7Fe:hover, .DShyMc-MTIzMjUzMzg1OTU0.MymH0d:hover .UISY8d-Ysl7Fe, .DShyMc-MTIzMjUzMzg1OTU0 .MymH0d:hover .UISY8d-Ysl7Fe, .d4Fe0d.s3BYNe {
    background-color: transparent;
}
.DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:hover, .DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:hover *, .DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:focus, .DShyMc-MTkwMDQyNzU2MzY0 .nRLOzd:focus *, .DShyMc-MTkwMDQyNzU2MzY0.VnOHwf-Tvm9db, .DShyMc-MTkwMDQyNzU2MzY0 .VnOHwf-Tvm9db, .DShyMc-MTkwMDQyNzU2MzY0.CNpREd .VnOHwf-Tvm9db {
    color: inherit;
}
.lYU7F {
    /* nice red */
    color: #2e7d32;
}
.hVNH5c, .ncFHed, .EHzcec, .joJglb.kLHn3 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.Xp0OCe {
    border-radius: 0.25rem;
}
.udxSmc, .xSP5ic {
    color: #ffffff5a;
}
.neggzd {
    color: #ffffff1a;
}
.DShyMc-MTg0MjQ2MDIxMDky .ybOdnf:not(.RDPZE).iWO5td, .DShyMc-MTg0MjQ2MDIxMDky .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .DShyMc-MTg0MjQ2MDIxMDky .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"], .DShyMc-MTkwMTE1MjU3MTA0 .ybOdnf:not(.RDPZE).iWO5td, .DShyMc-MTkwMTE1MjU3MTA0 .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .DShyMc-MTkwMTE1MjU3MTA0 .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"], .DShyMc-MTkwMDQyNzU2MzY0 .ybOdnf:not(.RDPZE).iWO5td, .DShyMc-MTkwMDQyNzU2MzY0 .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"], .DShyMc-MTkwMDQyNzU2MzY0 .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"] {
    background-color: #4242425a;
}

.cnOaDb {
    background-color: var(--gray) !important;
}

.editable {
    color: white !important;
}

.TisIWb .kKn9Nc:before {
    background-color: var(--hover-gray) !important;
}

.CIy9F {
    background-color: var(--gray) !important;
}

.snByac {
    color: white !important;
}

#UGb2Qe {
    color: white;
}

ul, ol {
    background-color: var(--gray) !important
}

ul:focus {
    background-color: var(--gray);
}

ol:focus {
    background-color: var(--gray);
}

ul:focus-within {
    background-color: var(--gray);
}

ol:focus-within {
    background-color: var(--gray);
}

.lGIiYb {
    background-color: var(--gray);
}

.google-material-icons {
    color: white;
}

.SZ0kZe {
    border-top: .0625rem solid white;
}

[jsname="YPqjbf"] {
    background-color: var(--gray) !important;
}

[guidedhelpid="classworkTab"] {
    color: white !important;
}

[guidedhelpid="studentTab"] {
    color: white !important;
}

.u2mfde {
    color: white !important;
}

.IzVHde {
    background-color: var(--gray)
}

.UvHKof .VnOHwf-Tvm9db {
    color: white;
}

.TisIWb .kKn9Nc {
    background-color: var(--hover-gray) !important;
    border-color: var(--hover-gray) !important;
}

.S3aLQd .bFjUmb-Ysl7Fe {
	background-color: var(--hover-gray) !important;
}

c-wiz.SSPGKf {
    background-color: rgba(15,15,15,0.6);
    border-radius: 50px;
}

div.EHzcec.eejsDc {
    background-color: #0f0f0f;
}

.Rq5Gcb {
    color: white;
    font-weight: bold;
}
`

style.setAttribute("id","darkModeStyle");

var grayHover = document.createElement("style");

grayHover.innerHTML = `
.ZoT1D:hover.idtp4e {
    background-color: var(--hover-gray) !important;
}

.qk0lee:focus:after {
    background-color: var(--hover-gray) !important;
}

.S3aLQd .UISY8d-Ysl7Fe:hover {
    background-color: var(--hover-gray) !important;
}

.S3aLQd .P3W0Dd-Ysl7Fe:focus {
    background-color: var(--hover-gray) !important;
}

.UvHKof .UISY8d-Ysl7Fe:hover {
    background-color: var(--hover-gray) !important;
}

.UvHKof .P3W0Dd-Ysl7Fe:focus {
    background-color: var(--hover-gray) !important;
}

.zvzLKc .P3W0Dd-Ysl7Fe:focus {
    background-color: var(--hover-gray) !important;
}

.LlcfK {
    background-color: var(--hover-gray) !important;
}

a.tX9u1b:active {
    background-color: #1f1f1f;
}

span.tX9u1b:hover span.Rq5Gcb {
    background-color: #1f1f1f;
}

a.tX9u1b:hover {
    background-color: #1f1f1f;
}

a.QgddUc .tX9u1b:focus {
    background-color: #1f1f1f;
}
`;
grayHover.setAttribute("id","grayHover");

let button = document.createElement("button");
button.setAttribute("id","darkSwitcher");
button.innerHTML = "Light Mode 🌞";
document.body.appendChild(button);

let settings = document.createElement("button");
settings.setAttribute("id","settingsButton");
settings.innerHTML = "Settings ⚙️";
document.body.appendChild(settings);
sessionStorage.setItem("settingsOpen","false");

function toggle() {
    if (darkmodestate) {
        document.querySelector("#darkModeStyle").remove();
        document.querySelector("#grayHover").remove();
        button.innerHTML = "Dark Mode 🌚"

        localStorage.setItem("darkmode","false");
        darkmodestate = false;
    } else if (!darkmodestate) {
        document.body.appendChild(style);
        document.body.appendChild(grayHover);
        button.innerHTML = "Light Mode 🌞";

        localStorage.setItem("darkmode","true");
        darkmodestate = true;
    }
}

button.onclick = toggle

document.addEventListener("keydown",(key) => {
    if (key.ctrlKey && key.altKey && key.key == "t") {
        toggle();
    }
    else if (key.ctrlKey && key.altKey && key.key == "s") {
        settingsToggle();
        }
    }
)

let dm = localStorage.getItem("darkmode");
    if (dm == "false") {
        darkmodestate = false;
        button.innerHTML = "Dark Mode 🌚";
    } else if (dm == "true") {
        dm = true;
        button.innerHTML = "Light Mode 🌞";
        document.body.appendChild(style);
        document.body.appendChild(grayHover);
        console.log("%cDark Mode Loaded Successfully","font-size: 1rem; font-family: courier; font-smooth: never; -webkit-font-smoothing: none; background-color: black; border-radius: 20px;")
    }

document.body.insertBefore(button, document.body.firstChild);
document.body.insertBefore(settings,document.body.firstChild);

//var observer = new MutationObserver(function (mutations, me) {
//    var div = document.querySelector("#yDmH0d > div.JPdR6b.hVNH5c.qjTEB > div > div");
//    if (div) {
//        var span = document.createElement("span")
//        span.className = "z80M1 FeRvI FwR7Pc";
//        span.innerHTML = `
//        <div class="aBBjbd MbhUzd" jsname="ksKsZd" style="top: 21px; left: 64px; width: 239px; height: 239px;"></div><div class="uyYuVb oJeWuf"><div class="jO7h3c">Dark Mode Settings ⚙️</div></div>
//        `;
//        div.insertBefore(span, div.lastChild)
//        me.disconnect(); //STOP OBSERVING
//        return;
//    }
//});

//START OBSERVING
//observer.observe(document, {
//    childList: true,
//    subtree: true
//});
let settingsModal = document.createElement("div");
settingsModal.setAttribute("style","overflow: auto; width: 100%; height: 100%; background-color: rgba(51,51,51,0.5); left: 0; top: 0; position: fixed; z-index: 999999999; display: grid;");
settingsModal.setAttribute("id","settingsOverlay")
settingsModal.innerHTML = `
<div id="settingsModal">
    <h1 id="settingsLabel">Settings</h1>
    <button id="settingsClose"">×</button>
    <div class="line"></div>
    <h1 id="themeSwitcherLabel" class="settingsLabel">Theme Switcher Size</h1>
    <input id="widthTextBox" class="textbox" placeholder="Width (Max 99)" type="text">
    <input id="heightTextBox" class="textbox" placeholder="Height (Max 99)" type="text">
    <button class="setDefault">Set To Default</button>
    <h1 id="settingsButtonLabel" class="settingsLabel">Settings Button Size</h1>    
    </div>
</div>`;
document.body.appendChild(settingsModal);

function closeSettings() {
    sessionStorage.setItem("settingsOpen","false");
    document.querySelector("#settingsOverlay").classList.remove("fadein");
    document.querySelector("#settingsOverlay").style.pointerEvents = "none";
    document.querySelector("#settingsModal").classList.remove("scaleup");
    document.body.style.overflow = "auto";
}

function openSettings() {
    sessionStorage.setItem("settingsOpen","true");
    document.querySelector("#settingsOverlay").classList.add("fadein");
    document.querySelector("#settingsOverlay").style.pointerEvents = "auto";
    document.querySelector("#settingsModal").classList.add("scaleup");
    document.body.style.overflow = "hidden";    
}
function settingsToggle() {
    if (sessionStorage.getItem("settingsOpen") == String(true)) {
        closeSettings();
    } else if (sessionStorage.getItem("settingsOpen") == String(false)) {
        openSettings();
    }
}

document.querySelector("#settingsOverlay").onclick = (e) => {
    if (sessionStorage.getItem("settingsOpen") == "true" && e.target == document.querySelector("div#settingsOverlay") || sessionStorage.getItem("settingsOpen") == "true" && e.target == document.querySelector("button#settingsClose")) {
        closeSettings();
    }
}

settings.onclick = settingsToggle;

chrome.runtime.onMessage.addListener(function (response, sendResponse) {
    if (response.action == "toggle_settings") {
        settingsToggle();
        return true
    }
});