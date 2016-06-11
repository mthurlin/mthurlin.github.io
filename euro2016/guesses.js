var results = {
    "France - Romania": null,
    "Albania - Switzerland": null,
    "Wales - Slovakia": null,
    "England - Russia": null,
    "Turkey - Croatia": null,
    "Poland - Northern Ireland": null,
    "Germany - Ukraine": null,
    "Spain - Czech Republic": null,
    "Ireland - Sweden": null,
    "Belgium - Italy": null,
    "Austria - Hungary": null,
    "Portugal - Iceland": null,
    "Russia - Slovakia": null,
    "Romania - Switzerland": null,
    "France - Albania": null,
    "England - Wales": null,
    "Ukraine - Northern Ireland": null,
    "Germany - Poland": null,
    "Italy - Sweden": null,
    "Czech Republic - Croatia": null,
    "Spain - Turkey": null,
    "Belgium - Ireland": null,
    "Iceland - Hungary": null,
    "Portugal - Austria": null,
    "Romania - Albania": null,
    "Switzerland - France": null,
    "Slovakia - England": null,
    "Russia - Wales": null,
    "Northern Ireland - Germany": null,
    "Ukraine - Poland": null,
    "Croatia - Spain": null,
    "Czech Republic - Turkey": null,
    "Hungary - Portugal": null,
    "Iceland - Austria": null,
    "Sweden - Belgium": null,
    "Italy - Ireland": null
};

/*
 2 - 0   3 - 0   3 - 0   2 - 0       1 - 0   3 - 0   3 - 1          
 0 - 1   1 - 0   0 - 1   0 - 1       0 - 1   1 - 2   0 - 2          
 0 - 1   1 - 2   0 - 0   1 - 1       0 - 0   1 - 1   0 - 2          
 1 - 0   2 - 1   2 - 1   1 - 1       1 - 0   1 - 1   2 - 1          
 0 - 1   1 - 1   1 - 1   1 - 2       1 - 1   1 - 2   2 - 2          
 1 - 0   2 - 0   2 - 1   2 - 0       1 - 0   1 - 0   2 - 1          
 1 - 0   2 - 0   3 - 0   2 - 0       1 - 0   3 - 2   3 - 1          
 1 - 0   3 - 0   2 - 1   2 - 0       1 - 0   2 - 2   3 - 1          
 0 - 1   0 - 1   1 - 2   0 - 1       0 - 2   0 - 0   0 - 2          
 1 - 0   1 - 1   2 - 0   2 - 1       0 - 0   1 - 1   2 - 2          
 1 - 0   3 - 1   1 - 0   1 - 0       1 - 0   2 - 2   2 - 1          
 1 - 0   3 - 1   3 - 0   2 - 0       1 - 0   1 - 1   2 - 0          
 1 - 0   1 - 2   1 - 0   2 - 0       1 - 0   2 - 0   1 - 0          
 0 - 1   1 - 1   0 - 0   1 - 1       0 - 1   2 - 2   2 - 1          
 1 - 0   3 - 0   2 - 1   2 - 1       1 - 0   3 - 0   4 - 0          
 1 - 0   2 - 1   1 - 0   2 - 0       1 - 0   2 - 1   3 - 0          
 1 - 0   2 - 0   1 - 1   1 - 0       1 - 0   1 - 1   1 - 1          
 2 - 0   2 - 2   2 - 1   2 - 0       1 - 0   3 - 2   2 - 1          
 1 - 0   1 - 0   2 - 2   2 - 0       1 - 0   1 - 0   2 - 1          
 0 - 1   1 - 1   1 - 1   0 - 1       0 - 1   1 - 1   1 - 1          
 1 - 0   3 - 0   4 - 0   2 - 0       1 - 0   2 - 0   2 - 1          
 1 - 0   1 - 1   3 - 0   2 - 0       1 - 0   1 - 0   3 - 1          
 1 - 1   3 - 1   1 - 1   1 - 0       0 - 0   2 - 1   0 - 0          
 1 - 0   2 - 2   1 - 2   1 - 0       1 - 0   2 - 2   1 - 2          
 1 - 0   1 - 1   1 - 1   0 - 1       1 - 0   2 - 1   2 - 0          
 0 - 1   0 - 3   1 - 3   0 - 1       0 - 1   2 - 3   1 - 3          
 0 - 1   1 - 2   0 - 2   1 - 2       0 - 1   0 - 3   0 - 2          
 1 - 0   2 - 1   0 - 1   2 - 0       1 - 0   2 - 1   2 - 0          
 0 - 2   0 - 4   0 - 4   2 - 0       0 - 2   1 - 3   0 - 4          
 1 - 1   0 - 2   0 - 2   0 - 1       1 - 1   2 - 2   0 - 2          
 1 - 1   0 - 3   1 - 2   1 - 2       1 - 1   2 - 2   1 - 2          
 1 - 1   0 - 2   0 - 0   0 - 1       1 - 1   2 - 1   1 - 3          
 0 - 1   0 - 3   0 - 2   0 - 2       0 - 1   0 - 2   0 - 3          
 0 - 1   1 - 2   1 - 1   0 - 1       0 - 1   1 - 0   0 - 1          
 0 - 1   1 - 2   0 - 2   0 - 2       1 - 1   0 - 3   1 - 1          
 1 - 0   2 - 0   1 - 0   1 - 0       2 - 0   1 - 0   2 - 0      
 */