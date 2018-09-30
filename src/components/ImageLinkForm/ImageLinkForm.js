import React from 'react'
import $ from "jquery"
import './ImageLinkForm.css'

const exampleValue = 'https://www.udayavani.com/sites/default/files/images/english_articles/2018/01/31/friends.jpg'

const ImageLinkForm = ({ onInputChange, onDetectSubmit }) => {
	$(document).ready( function(){
		$('#examplePhoto').on('click', () => {
			$('#photoURL').val(exampleValue).change()
			onInputChange({target:{value:exampleValue}})
		})
	})
	return (
		<div>
			<p className='f3 app-description'>
				<strong>{'Our Smart Assistant will help you detect faces in your photos. Give it a try!'}</strong>
			</p>
			<div className='center'>
				<div className='center photo-form pa4 br3 shadow-5 mb3'>
					<input onChange={onInputChange} className='f4 pa2 center' type='text' placeholder='Upload photo here...' id='photoURL'/>
					<button onClick={onDetectSubmit} className='grow detect-btn f4 link br1 ph3 pv2 pointer dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
	)
}

$(document).ready( function(){
    $('#photoURL').focus( function() {
		let inputWidth = $(window).width() * .90 - 160
		if (inputWidth < 250) return
		if (800 < inputWidth) inputWidth = 800
        $('#photoURL').animate({ width: inputWidth + 'px' }, 500);
    })
    $('#photoURL').blur( function() {
        $('#photoURL').animate({ width: '250px' }, 500);
    })
})

export default ImageLinkForm
