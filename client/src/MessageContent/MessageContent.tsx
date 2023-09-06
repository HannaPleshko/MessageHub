import { Button, Input } from 'antd';
import style from './style.module.scss';

const MessageContent = () => {

    
    return (
        <>
            <div>
                <div></div>
                <div className={style.right}>
                    <div className={style.message}></div>

                    <div className={style.flex}>
                        <div><Input placeholder='Message...' /></div>
                        <div><Button type="primary" >Send</Button></div>
                    </div>
                </div>
            </div>
        </>)
}

export default MessageContent