import $ from 'jquery';

class Modal{
	
	constructor(){
	  this.openModalButton =$(".open-modal");
	  this.modal =$(".modal");
	  this.closeModalButton =$(".modal__close");
	  this.events();
	}
	
	events(){
	
	//Clicking the Open Modal btn(Get in Touch)
	
	this.openModalButton.click(this.openModal.bind(this));
	
	//Clicking the X Close Modal btn
	
	this.closeModalButton.click(this.closeModal.bind(this));
	
	//pushes the Esc key
	$(document).keyup(this.keyPressHandler.bind(this));
	}
	
	openModal(){
		this.modal.addClass("modal--is-visible");
	}
	
	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}
	
	keyPressHandler(e){
		if(e.keyCode ==27){
			this.closeModal();
		}
	}
}

export default Modal;