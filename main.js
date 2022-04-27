const app = new Vue({
    el: '#app',
    data :{
        today: dayjs().format("MM/DD/YYYY"),
        now: dayjs().format("HH:mm"),
        isRecording : false,
        active : 0,
        emojiBoxVisible: false,
        newMessage: "",
        searchedName: "",
        
        myTextArea : document.getElementById("mytextarea"),
        emojis : [
            {
                name: "grinning face",
                category: "happy",
                character :"😁",
                index : 0
            },
            {
                name: "tears of joy",
                category: "happy",
                character :"😂",
                index : 1

            },
            {
                name: "smiling face blush",
                category: "happy",
                character :"😊",
                index : 2

            },
            {
                name: "smiling hearts eyes",
                category: "happy",
                character :"😍",
                index : 3

            },
            {
                name: "rolling eyes",
                category: "bored",
                character :"🙄",
                index : 4
            },
            {
                name: "sleeping face",
                category: "bored",
                character :"😴",
                index : 5
            },
            {
                name: "nerd face",
                category: "happy",
                character :"🤓",
                index : 6
            },
            {
                name: "sad face",
                category: "sad",
                character :"😔",
                index : 7

            },
            {
                name: "angry with steam",
                category: "angry",
                character :"😤",
                index: 8
            },
            {
                name: "crying face",
                category: "sad",
                character :"😢",
                index: 9

            },
            {
                name: "scream fear",
                category: "fear",
                character :"😱",
                index: 10

            },
        ],
        contacts: [
            {
                name: 'Coder Friend',
                avatar: '_1',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020',
                        time: '15:30',
                        text: "Let's talk about code!",
                        status: 'received'
                    },
                    // {
                    //     date: '10/01/2020',
                    //     time : '15:50',
                    //     text: 'Ricordati di dargli da mangiare',
                    //     status: 'sent'
                    // },
                    // {
                    //     date: '10/01/2020',
                    //     time : '16:15',
                    //     text: 'Tutto fatto!',
                    //     status: 'received'                    
                    // }
                ]
            },
            {
                name: 'Regular Friend',
                avatar: '_2',
                visible: true,
                messages:[
                    {
                        date: '20/03/2020 16:30:00',
                        time : '16:30',
                        text: "Hey what's up?",
                        status: 'received'
                    },
                    // {
                    //     date: '20/03/2020',
                    //     time : '16:31',
                    //     text: 'Bene grazie! Stasera ci vediamo?',
                    //     status: 'received'
                    // },
                    // {
                    //     date: '20/03/2020',
                    //     time : '16:35',
                    //     text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    //     status: 'sent'                    
                    // }
                ]
            },
            // {
            //     name: 'Samuele',
            //     avatar: '_3',
            //     visible: true,
            //     messages:[
            //         {
            //             date: '28/03/2020',
            //             time: '10:10',
            //             text: 'La Marianna va in campagna',
            //             status: 'received'
            //         },
            //         {
            //             date: '28/03/2020 10:20',
            //             time: '10:20',
            //             text: 'Sicuro di non aver sbagliato chat?',
            //             status: 'sent'
            //         },
            //         {
            //             date: '28/03/2020',
            //             time: '16:15',
            //             text: 'Ah scusa!',
            //             status: 'received'
            //         }
            //     ]
            // },
            // {
            //     name: 'Martina',
            //     avatar: '_4',
            //     visible: true,
            //     messages:[
            //         {
            //             date: '10/01/2020',
            //             time: '15:30',
            //             text: 'Lo sai che ha aperto una nuova pizzeria?',
            //             status: 'sent'
            //         },
            //         {
            //             date: '10/01/2020',
            //             time: '15:50',
            //             text: 'Si, ma preferirei andare al cinema',
            //             status: 'received'
            //         },
            //         {
            //             date: '10/01/2020',
            //             time: '15:52',
            //             text: 'Va bene, alla prossima allora!',
            //             status: 'sent'
            //         }
            //     ]
            // },
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
            if(this.active == 0){

                this.contacts[this.active].messages.push(
                    {
                        date: dayjs().format("MM/DD/YYYY"),
                        time: dayjs().format("HH:mm"),
                        text: "Yeah! Me too 🤓",
                        status: 'received'
                    },
                    )
                }else{
                    this.contacts[this.active].messages.push(
                    {
                        date: dayjs().format("MM/DD/YYYY"),
                        time: dayjs().format("HH:mm"),
                        text: "K... Nerd 🙄 ",
                        status: 'received'
                    },
                    )
                }
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
        toggleRecording(){
        this.isRecording = !this.isRecording
        },
        emojisOn(){
        this.emojiBoxVisible = !this.emojiBoxVisible
        },
        
        getEmoji(event){
            this.newMessage += event.target.innerHTML.trim()
            event.preventDefault();
       },

    },
    

})


