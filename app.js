
function generateList(array) {

    const $ul = document.createElement('ul');

    for (let i = 0; i < array.length; i++) { 

        const $li = document.createElement('li');

        if (Array.isArray(array[i])) {

            $li.appendChild(generateList(array[i]));

        } else {
            $li.innerHTML = array[i];
        };

        $ul.appendChild($li);
    };

    return $ul;

};
const arr = [1, [1.1, 1.2, [1.21, [1.22, 1.222]], 1.3], 2, 3];

document.body.appendChild(generateList(arr));

const $table = document.createElement('table');
$table.style.borderCollapse = 'collapse';
$table.style.border = '1px solid black';
const $tBody = document.createElement('tbody');
const $tr = document.createElement('tr');
$tr.style.height = '30px'
const $td = document.createElement('td');
$td.style.border = '1px solid black'
$td.style.textAlign = 'center'
$td.style.width = '30px'
let i = 0;
let count = 1;
while (i < 10) {
    const row = $tr.cloneNode();

    j = 0;

    while (j < 10) {
        const column = $td.cloneNode()

        column.innerHTML = count;

        row.appendChild(column);
        j++;
        count++;
    };
    $tBody.appendChild(row);
    i++;
};

$table.appendChild($tBody);
document.body.appendChild($table);


