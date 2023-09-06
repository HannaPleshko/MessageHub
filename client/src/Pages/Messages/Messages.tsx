import { useEffect } from 'react';
import { useGetMessagesQuery } from '../../services';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import MessageContent from '../../MessageContent/MessageContent';


const Messages: React.FC = () => {
    const location = useLocation();
    const someData = location.state.user;

    const { data } = useGetMessagesQuery<any>(someData?.id);

    function getMessages() {
        try {
            if (!data) return
            console.info(data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMessages();
    }, [data]);

    return (
        <>
            <Header />


            <div>
                {data ? <MessageContent />  : <h1>беседа не начата</h1>}
            </div>
        </>
    );
};

export default Messages;
