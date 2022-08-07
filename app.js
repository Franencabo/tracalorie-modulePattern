// Storage Controller

// Item Controller
const ItemCtrl = (function(){
    // Item Constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Eggs', calories: 300},
        ],
        currentItem: null,
        totalCalories: 0
    }


    // Public Methods
    return {
        getItems: function(){
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
    
})();

// UI Controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list'
    }


    // Public Methods
    return {
        populateItemList: function(items){
            let html = '';
            items.forEach(function(item){
                html += `   
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong>
                    <em>${item.calories}</em>
                    <a href="#" class="edit-item secondary-content">
                        <i class="material-icons right">edit</i>
                    </a>
                </li>
            `;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;

        }
    }
    
})();

// App Controller
const App = (function(ItemCtrl, UICtrl){
    // console.log(ItemCtrl.logData());


    // Public methods
    return {
        init : function(){
            console.log('Initialize App...')
            const items = ItemCtrl.getItems();

            // Fetch items from data structure
            console.log(items);

            // Populate lits with items
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UICtrl);


// Initialize App
App.init();