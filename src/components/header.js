export default function Header(props){


    const header_container={
        background:'#101010',
        minWidth:'100vh',
        height:'84px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        // alignItems:'center',

    }

    const company={
        font:'SF Pro Display',
        fontWeight:'700, bold',
        fontSize:'36px',
        lineHeight:'42.9px',
        color:'#FFFFFF',
        width:'144px',
        height:'43px',
        marginLeft:'43px',
        marginTop:'21px',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }

    const userName_style={
        font:'inter',
        fontWeight:'700px bold',
        fontSize:'20px',
        lineHeight:'24.2px',
        color:'#FFFFFF',
        minWidth:'121px',
        height:'24px',
        margin:'30px 25px 30px 0 ',


    }

    const userNameImage_container={
        margin:'0px 42.72px 0px 0px',
        display:'flex',
        flexDirection:'row',


    }
    const img_Style={
        width:'44px',
        height:'44px',
        borderRadius:'22px 22px',
        margin:'20.28px 0 19.72px 0',
        transform: 'rotate(-0.36deg)',

    }
    console.log(props.userData?.name);
    return(
        <div style={header_container}>
            <div style={company}>Edvora</div>
            <div style={userNameImage_container}>
                <div style={userName_style}>{props?.userData?.name}</div>
                <img style={img_Style} src={props?.userData?.url}></img>
            </div>
            
        </div>

    )
}