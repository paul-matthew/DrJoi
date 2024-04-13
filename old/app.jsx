/*This file typically represents the main component of your application.
It contains the structure and logic of your application's layout and behavior.
Depending on the complexity of your application, it may contain other components or import other components from separate files. */

import React from 'react';

function App() {
  return (
<div className="Homedesktop" style={{width: '100%', height: '100%', padding: 16, borderRadius: 5, overflow: 'hidden', border: '1px #7B61FF dotted', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
    <div className="DeviceDesktopContent1" style={{width: 1700, height: 944, position: 'relative', border: '1px black solid'}}>
        <div className="Image" style={{width: 1700, height: 802, left: 0, top: 24, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
            <img className="AboutMem2" style={{width: 1803, height: 1179}} src="https://via.placeholder.com/1803x1179" />
        </div>
        <div className="Rectangle158" style={{width: 850, height: 68, left: 850, top: 798, position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} />
        <div className="TextContent3" style={{height: 336, left: 1091, top: 652, position: 'absolute', opacity: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            <div className="Title" style={{alignSelf: 'stretch', height: 256, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                <div className="Taxonomy" style={{alignSelf: 'stretch', color: '#A2A2C7', fontSize: 60, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Blog</div>
                <div className="Title" style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 64, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 72, wordWrap: 'break-word'}}>Stay up to date with current initiatives</div>
            </div>
            <div className="Button" style={{paddingLeft: 40, paddingRight: 40, paddingTop: 16, paddingBottom: 16, background: '#5F5FB0', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '2px #3A3AC0 solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div className="Label" style={{color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 1.60, wordWrap: 'break-word'}}>READ MORE</div>
            </div>
        </div>
        <div className="Overlay2" style={{width: 425, height: 944, left: 851, top: 1, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
        <div className="HoverOverlay2" style={{width: 425, height: 944, paddingTop: 100, paddingBottom: 100, left: 850, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div className="Button2" style={{textAlign: 'center', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 3, wordWrap: 'break-word'}}>Services</div>
        </div>
        <div className="Overlay1" style={{width: 850, height: 944, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}}></div>
        <div className="TextContent1" style={{height: 508, left: 73, top: 132, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            <div className="Title" style={{alignSelf: 'stretch', height: 288, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                <div className="Title" style={{alignSelf: 'stretch', color: 'white', fontSize: 64, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 72, wordWrap: 'break-word'}}>Community <br/>Minded <br/>Consulting <br/>Firm</div>
            </div>
            <div className="Lead" style={{alignSelf: 'stretch', color: 'white', fontSize: 24, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>E3 Strategic Solutions empowers organizations to reach their full potential with professional planning services</div>
            <div className="Button" style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, background: '#5F5FB0', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '2px #3A3AC0 solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div className="Label" style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 1.60, wordWrap: 'break-word'}}>ABOUT US</div>
            </div>
        </div>
        <div className="Overlay2" style={{width: 425, height: 944, left: 1275, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
        <div className="HoverOverlay3" style={{width: 425, height: 944, paddingTop: 100, paddingBottom: 100, left: 1275, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderLeft: '1px #8C8484 solid', borderTop: '1px #8C8484 solid', borderRight: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div className="Button2" style={{color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 3, wordWrap: 'break-word'}}>Blog</div>
        </div>
    </div>
    <div className="DeviceDesktopContent2" style={{width: 1700, height: 944, position: 'relative'}}>
        <div className="Image" style={{width: 1700, height: 802, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
            <img className="About311" style={{width: 1727, height: 1166}} src="https://via.placeholder.com/1727x1166" />
        </div>
        <div className="Overlay1" style={{width: 425, height: 944, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.30)'}} />
        <div className="HoverOverlay1" style={{width: 425, height: 944, paddingTop: 100, paddingBottom: 100, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div className="Button2" style={{color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 3, wordWrap: 'break-word'}}>About Us</div>
        </div>
        <div className="Rectangle158" style={{width: 425, height: 68, left: 0, top: 798, position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} />
        <div className="Overlay2" style={{width: 850, height: 944, left: 425, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}}></div>
        <div className="TextContent2" style={{width: 510, height: 436, left: 595, top: 296, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
            <div className="Title" style={{alignSelf: 'stretch', height: 240, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                <div className="Title" style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 54, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 60, wordWrap: 'break-word'}}>Assessments & Strategic Planning to achieve your business objectives</div>
            </div>
            <div className="Lead" style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Allow us to elevate your business</div>
            <div className="Frame2229" style={{width: 246, justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                <div className="Button" style={{height: 56, paddingLeft: 20, paddingRight: 20, paddingTop: 16, paddingBottom: 16, background: '#5F5FB0', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '2px #3A3AC0 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Label" style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 1.60, wordWrap: 'break-word'}}>OUR SERVICES</div>
                </div>
            </div>
            <div className="Button" style={{width: 246, paddingLeft: 40, paddingRight: 40, paddingTop: 16, paddingBottom: 16, background: '#A2A2C7', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '2px #8484E6 solid', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div className="Label" style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 1.60, wordWrap: 'break-word'}}>BOOK A CONSULTATION</div>
            </div>
        </div>
        <div className="Overlay2" style={{width: 425, height: 944, left: 1275, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
        <div className="HoverOverlay3" style={{width: 425, height: 944, paddingTop: 100, paddingBottom: 100, left: 1275, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderLeft: '1px #8C8484 solid', borderTop: '1px #8C8484 solid', borderRight: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div className="Button2" style={{color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 3, wordWrap: 'break-word'}}>Blog</div>
        </div>
        <div className="Rectangle159" style={{width: 425, height: 68, left: 1275, top: 798, position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} />
    </div>
    <div className="DeviceDesktopContent3" style={{width: 1700, height: 944, position: 'relative'}}>
        <div className="Mobileimage" style={{width: 1700, height: 944, left: 0, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <img className="Boardroom1" style={{width: 1700, height: 944}} src="https://via.placeholder.com/1700x944" />
        </div>
        <div className="Overlay1" style={{width: 425, height: 944, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.30)'}} />
        <div className="HoverOverlay1" style={{width: 425, height: 944, paddingTop: 100, paddingBottom: 100, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div className="Button2" style={{color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 3, wordWrap: 'break-word'}}>About Us</div>
        </div>
        <div className="Overlay2" style={{width: 425, height: 944, left: 425, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.30)'}} />
        <div className="HoverOverlay2" style={{width: 425, height: 944, paddingTop: 100, paddingBottom: 100, left: 425, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div className="Button2" style={{color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 3, wordWrap: 'break-word'}}>Services</div>
        </div>
        <div className="Rectangle158" style={{width: 850, height: 68, left: 0, top: 798, position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} />
        <div className="Overlay2" style={{width: 850, height: 944, left: 850, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.30)'}} />
        <div className="TextContent3" style={{height: 376, left: 1020, top: 284, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
            <div className="Title" style={{alignSelf: 'stretch', height: 296, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex'}}>
                <div className="Title" style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 64, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 74, wordWrap: 'break-word'}}>Stay up to date with current initiatives and valuable insights</div>
            </div>
            <div className="Button" style={{paddingLeft: 40, paddingRight: 40, paddingTop: 16, paddingBottom: 16, background: '#5F5FB0', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '2px #3A3AC0 solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div className="Label" style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 24, letterSpacing: 1.60, wordWrap: 'break-word'}}>READ BLOG</div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;