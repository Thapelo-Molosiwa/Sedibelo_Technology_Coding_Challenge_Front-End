$(document).ready(function() {
    const tableBody = $('#dataTable tbody');
    const searchInput = $('#searchInput');
    const designationFilter = $('#designationFilter');
    const prevPageBtn = $('#prevPage');
    const nextPageBtn = $('#nextPage');
    const pageCounter = $('#pageCounter');
    
    let users = [];
    let currentPage = 1;
    let usersPerPage = 10;
  
    // Fetch data from JSON file
    $.getJSON('users.json', function(data) {
      users = data;
      populateTable();
      populateDropdown();
    });
  
    // Populate the table with data
    function populateTable() {
      tableBody.empty();
      const startIndex = (currentPage - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      const filteredUsers = filterUsers();
      
      for (let i = startIndex; i < endIndex && i < filteredUsers.length; i++) {
        const user = filteredUsers[i];
        tableBody.append(`<tr><td>${user.name}</td><td>${user.surname}</td><td>${user.designation}</td><td>${user.department}</td></tr>`);
      }
      pageCounter.text(`Page ${currentPage}`);
    }
  
    // Populate dropdown with designations
    function populateDropdown() {
      const designations = users.map(user => user.designation);
      const uniqueDesignations = [...new Set(designations)];
      uniqueDesignations.forEach(designation => {
        designationFilter.append(`<option value="${designation}">${designation}</option>`);
      });
    }
  
    // Filter users based on search input and designation
    function filterUsers() {
      let filteredUsers = users;
      const searchTerm = searchInput.val().toLowerCase();
      const selectedDesignation = designationFilter.val();
  
      if (searchTerm) {
        filteredUsers = filteredUsers.filter(user => 
          user.name.toLowerCase().includes(searchTerm) || 
          user.surname.toLowerCase().includes(searchTerm) ||
          user.designation.toLowerCase().includes(searchTerm) ||
          user.department.toLowerCase().includes(searchTerm)
        );
      }
  
      if (selectedDesignation) {
        filteredUsers = filteredUsers.filter(user => user.designation === selectedDesignation);
      }
  
      return filteredUsers;
    }
  
    // Event listeners for search input and dropdown change
    searchInput.on('input', function() {
      currentPage = 1;
      populateTable();
    });
  
    designationFilter.on('change', function() {
      currentPage = 1;
      populateTable();
    });

    // Event listener for cancel button
$('#cancelSearch').on('click', function() {
    searchInput.val('');
    currentPage = 1;
    populateTable();
  });
  
  
    // Pagination event listeners
    prevPageBtn.on('click', function() {
      if (currentPage > 1) {
        currentPage--;
        populateTable();
      }
    });
  
    nextPageBtn.on('click', function() {
      const maxPage = Math.ceil(filterUsers().length / usersPerPage);
      if (currentPage < maxPage) {
        currentPage++;
        populateTable();
      }
    });
  });
  