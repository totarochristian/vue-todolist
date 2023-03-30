const {createApp} = Vue;
createApp({
    data(){
        return {
            title: 'Lista della spesa per Pasquetta',
            lastQuestId: 0,
            quests: [],
            newQuest: ''
        }
    },
    methods:{

    }
}).mount("#app");