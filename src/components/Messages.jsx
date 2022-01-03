import React from "react";
import "../index.css";
const Messages = ({messages}) => {
 

    return (
        <div className="users">
          <table>
            <thead>
              <tr>
                <th>Sender</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>

              {messages.map((message, index) => (
                <tr className="user-list-item" key={index}>
                  <td> {message.sender} </td>
                  <td> {message.email} </td>
                  <td> {message.phoneNumber} </td>
                  <td> {message.message} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
  }
export default Messages;
