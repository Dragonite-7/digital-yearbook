import React from 'react';

interface Props {
  onlineUsers: any[];
}

const Online: React.FC<Props> = ({ onlineUsers }) => (
	<div style={{
		position: 'relative',
	}}>
		<div style={{
			position: 'fixed',
			width: 100,
			height: 500,
			top: 100,
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: 'transparent'
		}}>
			{onlineUsers.map((userDisplayData) => (
				<div>
					<img src={userDisplayData.profilePic}/>
					<span>{userDisplayData.userName} is online</span>
				</div>
			))}
		</div>
	</div>
);

export default Online;