const app = new Vue({
    el: '#app',
    data :{
        today: dayjs().format("MM/DD/YYYY"),
        now: dayjs().format("HH:mm"),
        recording : false,
        active : 0,
        emoji: false,
        newMessage: "",
        searchedName: "",
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020',
                        time: '15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        time : '15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        time : '16:15',
                        text: 'Tutto fatto!',
                        status: 'received'                    
                    }
                ]
            },
            {
                name: 'Marco',
                avatar: '_2',
                visible: true,
                messages:[
                    {
                        date: '20/03/2020 16:30:00',
                        time : '16:30',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020',
                        time : '16:31',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020',
                        time : '16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'                    
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages:[
                    {
                        date: '28/03/2020',
                        time: '10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20',
                        time: '10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020',
                        time: '16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Martina',
                avatar: '_4',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020',
                        time: '15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        time: '15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020',
                        time: '15:52',
                        text: 'Va bene, alla prossima allora!',
                        status: 'sent'
                    }
                ]
            },
        ],
    },
    methods: {
        makeActive(index){
        prova = (this.contacts[this.active].messages.length)

            this.active = index
        },
        onKeyEnterUp(active){
            if(this.newMessage != "" && this.newMessage.trim() != ""){

                this.sendMessage(active);
                setTimeout((this.receiveFakeMessage), 3000);
            }
        },
        sendMessage(active){
                this.contacts[active].messages.push(
                    {
                        date: dayjs().format("MM/DD/YYYY"),
                        time: dayjs().format("HH:mm"),
                        text: this.newMessage.trim(),
                        status: 'sent'
                    },
                    )
            this.newMessage = "";
        },
        receiveFakeMessage(){
                this.contacts[this.active].messages.push(
                    {
                        date: dayjs().format("MM/DD/YYYY"),
                        time: dayjs().format("HH:mm"),
                        text: "okay",
                        status: 'received'
                    },
                    )
                },
        filterSearch(){
            // nome_ricercato = [];
            // nome_ricercato.push(this.searchedName);
            // console.log(nome_ricercato)

            let searched_name_lower = this.searchedName.toLowerCase()


            this.contacts.forEach((contact, index) => {

                let name_lower = contact.name.toLowerCase();

                // let name_upper = contact.name.toUpperCase();
                // let name_regular = contact.name;

                if(!name_lower.startsWith(searched_name_lower)){
                    contact.visible = false;
                }else if(name_lower.includes(searched_name_lower)){
                    contact.visible = true;
                }
            });
        },
        recordingOn(){
        this.recording = !this.recording
        console.log(this.recording)
        },
        emojiOn(){
        this.emoji = !this.emoji
        console.log(this.emoji)
        },
    }

})



// Come fa a prendermi tutti i nomi se non ho specificato l'indice?






// Perchè funziona con l'operatore logico "e" e  non "o"

// perchè sta funzionando solo con l'esclusione?