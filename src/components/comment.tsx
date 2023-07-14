import { useEffect, useState } from "react";
import { BlueButton } from "../styles/Button.style";
import { IComments } from "../interfaces/Comments.type";
import { ModalContainer, ModalInput } from "../styles/Container.style";

function Comment({ commentId }: { commentId?: number }) {
  const [comment, setComment] = useState<IComments | null>();
  const [tempComment, setTempComment] = useState<IComments | null>();
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?id=${commentId}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComment(data[0]);
        setTempComment(data[0]);
      });
  }, []);

  function updateComment() {
    const url = `https://jsonplaceholder.typicode.com/comments?id=${commentId}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(tempComment),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        //fetch method returns id: 501, I think that is status code 501 (Not Implemented)
      })
      .catch();

    setComment(tempComment);
  }

  return (
    <>
      {tempComment ? (
        <div>
          <ModalContainer>
            <p> Post ID: {tempComment.id} </p>
            Name:
            <ModalInput
              type="text"
              value={tempComment.name}
              onChange={(e: any) => {
                setChanged(true);
                setTempComment({ ...tempComment, name: e.target.value });
              }}
            />
            Email:
            <ModalInput
              type="text"
              value={tempComment?.email}
              onChange={(e: any) => {
                setChanged(true);
                setTempComment({ ...tempComment, email: e.target.value });
              }}
            />
            Comment:
            <ModalInput
              type="text"
              value={tempComment?.body}
              onChange={(e: any) => {
                setChanged(true);
                setTempComment({ ...tempComment, body: e.target.value });
              }}
            />
          </ModalContainer>
          {changed ? (
            <BlueButton onClick={updateComment}> UPDATE </BlueButton>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
export default Comment;
