import React, {useState} from "react"


const Retweet = () => {

    const [retweet, setRetweet] = useState(false)

    const doRetweet = () => {
        setRetweet(true)
    }


    return (
        <div style={{display: "flex"}}>
            {/* <button onClick={doRetweet}>{retweet}</button> */}
            {retweet ? <img onClick={() => setRetweet(false)} src="https://pbs.twimg.com/media/CaTQV06WQAI1VuE.png" width="30" height="30"/> : <img onClick={() => setRetweet(true)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAABhYWH09PTl5eV0dHRTU1O3t7f7+/u1tbVHR0e5ublLS0vn5+c/Pz/5+fk4ODgODg4WFhYdHR1mZmacnJzNzc1ISEje3t4uLi6Ojo5CQkJvb28lJSXExMTs7Ox9fX0zHpBsAAADrklEQVR4nO2d7VLqQBAFiYIEEBGvgopf7/+Ul2ilRJkEkpyzSVndvymXrpnZ2Y1mHI0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAIzG7zvr+Cl2mW/W3FvWCWzSPF1YWY+8nD5j254CLLKhUfMz3rq0VawVm5cpioy38GxyxL6bj4XvYmUhzfWRSvl6kEp4fLbleR4tqimL2lEVz8XHUXRtGkOEshOP29aspaTFGMi+NV51GiLk1RfOxBcF+LCRP1ySx4lKJfhDuqKVGf+xCsqMWxR9HZMyoFK043S4uhMYhhDdYqWmpxbROc1S+crmm4+n5tBAvi7cZwgDOlaU0NlqRqGrd9CVYc4AxR7E0wWdOIzlAdOVmDJWmiqL/xny1Y9WDjsj35y/EiY7XgmSn6RbijdmHiN2wkqH8C5zdsKFhxmWqP3bBBDZaE201r3IYnjmox0kQ1G7aIYMFOmKhew8Y1WBI2jXZYDVsLKpuG07CDoLAWjYadBHVNw2fYcpM5UNRE0WbYqk38RJOoLsPOESyQbDcmw441WKKoRY+hJIIFggOcxVBQgyXda9FhKBTc1+Ll8Aw386saro8XfK37/PZjeIb1vB8vOLEumNww+F3EHzMcY6gGQzkYysFQDoZyMJSDoRwM5WAoB0M5GMrBUA6GcjCUg6EcDOVgKAdDORjKwVAOhnIwlDMEQ+873UMw9E5YMBh+bOv+mOP1eMHrus/vNsMzXN0c/8z2dH6h3ZGluVCx+xv7ljrM58MRNO00+XYwgq69VJOokqESrm6hUNRMzfD1w+BvApshmpnhM8w7Kk41X8N6pumUqCpBq2GXpiET9J5L2yeqTtB88m4bReVgHvfdolUtSocr2W9PLRJVO1rJbti8FoU1WJDgBrzrM4JJDPNGiuIIhoYveYeZCeGbUQ0SVT/eLHjfohN30YOz82vRML9tJTaMFc9tGvIULVAbZutQ8awrsUVwdCtXDJ/wnpOoHsHRs94wjOLpA5xrhuKb3rBiuzlRi745mJZ5iOHAx9pENU7BNKRpVaLWKJpq8BPPrMCGTcMpaApiRS1WbDdewdHoyaLYoGnYJ9E6JnZXKgZR7GfUroIzm4Y7RT+RvtD+Tbyj/jrAJZpc7uj7BadrMUkEC5ZXFsM4igdX4qSz5y1jgk/UYpKR5QeOF44TXN0BLvF/SNhzuXmY3Kv/n0X0YOOrFpPVYC/c/HXBfS0mrkEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKjgP1EjOq/H3bsUAAAAAElFTkSuQmCC"  width="30" height="30"/>}
        </div>
    );
}

export default Retweet