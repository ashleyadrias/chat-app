import React from 'react'

// create dummy data for now before connecting the api

const DUMMY_DATA = [
	{
		senderId: 'perborgen',
		text: 'Hey, how is it going?'
	},
	{
		senderId: 'janedoe',
		text: 'Great! How are you?'
	},
	{
		senderId: 'perborgen',
		text: 'Good to hear!'
	}
]

class MessageList extends React.Component {
	render() {
		return (
				<div className="message-list">
					{
						DUMMY_DATA.map((message, index) => {
							return (
								<div> {
									message.text
								}
								</div>
								)
						})
					}
				</div>
			)
	}

}

export default MessageList