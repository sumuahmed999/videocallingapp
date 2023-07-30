import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () =>{
    const {roomId} = useParams();

    const myMeeting = async(element) =>{
        const appID = 174212830;
        const serverSecret = "0a6ad793753a4fe96c941939c7175768";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId, 
            Date.now().toString(), 
            "Enter Your Name" 
            );
            const zc= ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'copy Link',
                        url: `http://localhost:3000/room/${roomId}`
                      },
                ],
                scenario:{
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton:true,
            });
    };

    return (
        <div>
            <div ref={myMeeting}/>
            <p>&copy; Sumu Ahmed</p>
        </div>
    );
};

export default RoomPage; 