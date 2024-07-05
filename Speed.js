 @track percentage = 0;
     @track progressBarStyle = '';
    
    handleClick(event) {
       // console.log('OUTPUT : ',this.percentage);
            let color;
            if (this.percentage >= 0 && this.percentage <= 40) {
                color = 'green';
            } else if (this.percentage >= 40 && this.percentage <= 80) {
                color = 'yellow';
            } else {
                color = 'red';
            }
         //   console.log('color : ',color);
            this.progressBarStyle = `width: 100%; background-color: ${color}; height: 15px; margin:10px`;
         //   console.log('progressBarStyle : ',this.progressBarStyle);
    }

    handleChange(event) {
        this.percentage = event.target.value;
    }
    

}
