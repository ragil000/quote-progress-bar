new Vue({
    el: '#app',
    data: {
        hide: false,
        quote: '',
        name: '',
        title: 'Post',
        percentage: 0
    },
    methods: {

        progress: function(event) {
            _self       = this
            _title      = this.title
            this.title  = ''
            event.target.className += ' on-progress'
            var calculatenPercentage    = setInterval(function() {
                if(_self.percentage < 100) {
                    _self.percentage += 1
                }else {
                    event.target.className += ' finished'
                    event.target.classList.remove('on-progress')
                    clearInterval(calculatenPercentage)
                    setTimeout(function(){
                        event.target.classList.remove('finished')
                        _self.hide          = true
                        _self.percentage    = 0
                        _self.title         = 'New '+_title
                    }, 1500)
                }
            }, 100)
        }

        
    }
})