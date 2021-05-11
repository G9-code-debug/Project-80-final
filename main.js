var name_of_the_guests_array = [];
function submit() {
    name_of_the_guests = document.getElementById("input_1").value;
    document.getElementById("input_1").innerHTML="";
    name_of_the_guests_array.push(name_of_the_guests);
    document.getElementById("label_1").innerHTML=name_of_the_guests_array;
}
function show() {
    name_of_the_guests_without_commas=name_of_the_guests_array.join("<br>");
    document.getElementById("p_1").innerHTML=name_of_the_guests_without_commas;
}
function sort() {
    name_of_the_guests_array.sort();
    document.getElementById("p_2").innerHTML=name_of_the_guests_array.join("<br>");
}
function search() {
    length = name_of_the_guests_array.length;
    input = document.getElementById("input_2").value;
    found = 0;
    for(j = 0; j < length; j++){
        if(input==name_of_the_guests_array[j]){
            found = found+1;
        }
        document.getElementById("p_3").innerHTML=" name found "+found+"times/s"
    }
}