const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const mainDiv = document.createElement('div');

mainDiv.innerHTML = `<ul id="list"><li><i class="material-icons">folder</i><span class="clickable">Films</span>
<ul class="list inside"><li>Iron Man.avi</li><li><i class="material-icons">folder</i>
<span class="clickable">Fantasy</span></li></ul></li>
<li><i class="material-icons">folder</i><span class="clickable">Documents</span></li></ul>`;

rootNode.appendChild(mainDiv);

document.getElementById('list').style.listStyle = 'none';
