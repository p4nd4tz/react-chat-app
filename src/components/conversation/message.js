import { Chat_History } from '../../data'
import { MediaMsg, TextMsg, ReplyMsg, Timeline, LinkMsg, DocMsg } from './msg-types'

const Message = () => {
    return (
        <div className="p-3">
            <div className="flex flex-col gap-5">
                {Chat_History.map(el => {
                    switch (el.type) {
                        case "divider":
                            return <Timeline el={el} />
                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    return <MediaMsg el={el} />
                                case "doc":
                                    return <DocMsg el={el} />
                                case "link":
                                    return <LinkMsg el={el} />
                                case "reply":
                                    return <ReplyMsg el={el} />
                                default:
                                    return <TextMsg el={el} />
                            }
                        default:
                            return <></>

                    }
                })}
            </div>
        </div>
    )
}

export default Message;