// script.js

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('activity');
    const button = document.getElementById('submitBtn');
    const output = document.getElementById('output');

    button.addEventListener('click', function() {
        const activity = input.value;

        if (activity.trim() !== '') { // 檢查input是否為空
            // 創建一個新的<div>元素來包含文字和按鈕
            const textContainer = document.createElement('div');
            textContainer.classList.add('text-container');

            // 創建文字節點並添加到textContainer中
            const textNode = document.createTextNode(activity);
            textContainer.appendChild(textNode);

            // 創建編輯按鈕並添加到textContainer中
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-button');
            editButton.addEventListener('click', function() {
                // 編輯按鈕的點擊事件處理程序
                // 在這裡你可以實現編輯功能
                alert('Edit button clicked');
            });
            textContainer.appendChild(editButton);

            // 創建刪除按鈕並添加到textContainer中
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', function() {
                // 刪除按鈕的點擊事件處理程序
                // 在這裡你可以實現刪除功能
                textContainer.remove();
            });
            textContainer.appendChild(deleteButton);

            // 將textContainer添加到output中
            output.appendChild(textContainer);

            // 清空input
            input.value = '';
        } else {
            alert('Please enter an activity.');
        }
    });
});
