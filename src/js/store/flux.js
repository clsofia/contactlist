

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			url: "https://playground.4geeks.com/apis/fake/contact/agenda/sophia",

		contactAdded: false,

		currentAgenda: "sophia",

		contacts: [],
			
		},
		actions: {

			//get data from my agenda

			getData: async () => {

				const resp = await fetch(getStore().url)
			//	if (!resp.ok) getActions().addContact();
				const data = await resp.json()
				console.log(data)
				setStore({ contacts: data })

			},

			addContact: async (full_name, email, address, phone) => {
				const opt = {

					headers: {
						"Content-Type": "application/json"

					},

					method: "POST",
					body: JSON.stringify(
						{
							full_name: full_name || "Dave Bradley",
							email: email || "dave@gmail.com",
							agenda_slug: "sophia",
							address: address || "47568 NW 34ST, 33434 FL, USA",
							phone: phone || "7864445566"
						})

				}

				const resp = await fetch("https://playground.4geeks.com/apis/fake/contact/", opt)
				console.log("resp addContact", resp)
				if (resp.statusText=== "CREATED") getActions().getData();
			},

			updateContact: async (id,full_name, email, address, phone) => {
				const opt = {

					headers: {
						"Content-Type": "application/json"

					},

					method: "PUT",
					body: JSON.stringify(
						{
							full_name: full_name || "Dave Bradley",
							email: email || "dave@gmail.com",
							agenda_slug: "sophia",
							address: address || "47568 NW 34ST, 33434 FL, USA",
							phone: phone || "7864445566"
						})

				}

				const resp = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, opt)
				console.log("resp addContact", resp)
				if (resp.statusText=== "CREATED") getActions().getData();
			},

			getUser: (id) => {
				
					const opt = {
						method: "GET",
					}
					const resp = fetch("https://playground.4geeks.com/apis/fake/contact/" + id, opt)
					return	resp.then(resposta => resposta.json()).then(data => data)
					
			},


			deleteUser: (id) => {

				if (id > -1) {
					const opt = {
						method: "DELETE",
					}
					const resp = fetch("https://playground.4geeks.com/apis/fake/contact/" + id, opt)
					resp.then(resposta => {
						console.log(resposta.statusText)
						if(resposta.statusText === "CREATED") {
							const filterData = getStore().contacts.filter(item => item.id !== id);
							setStore({ contacts: filterData })
						}
					})
					
				}
				
			},
					
				
			
		
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;