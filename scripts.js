document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            window.dummyData = data;
        });
});

// Variables globales para almacenar instancias de gráficos
let doughnutChartInstance = null;
let barChartInstance = null;
let lineChartInstance = null;
let radarChartInstance = null;
let pieChartInstance = null;

// Función para cargar datos y renderizar los gráficos correspondientes
function loadData(platform) {
    const data = dummyData[platform];

    // Ocultar el texto introductorio
    document.getElementById('introText').style.display = 'none';

    // Mostrar los recuadros de información y los gráficos
    document.getElementById('titleCount').style.display = 'block';
    document.getElementById('productionsCount').style.display = 'block';
    document.getElementById('platformAverage').style.display = 'block';
    document.getElementById('platformPerMonth').style.display = 'block';
    document.querySelector('.chartsContainer').style.display = 'flex';

    // Actualizar los recuadros de información
    updateTitleCount(platform, data.titleCount);
    updateProductionsCount(platform, data.productionsCount);

    // Eliminar gráficos existentes si ya están creados
    if (doughnutChartInstance) {
        doughnutChartInstance.destroy();
    }
    if (barChartInstance) {
        barChartInstance.destroy();
    }
    if (lineChartInstance) {
        lineChartInstance.destroy();
    }
    if (radarChartInstance) {
        radarChartInstance.destroy();
    }
    if (pieChartInstance) {
        pieChartInstance.destroy();
    }

    // Renderizar los nuevos gráficos
    renderDoughnutChart(data.labels, data.datasets);
    renderBarChart(data.labels, data.datasets);
    renderLineChart(data.labels, data.datasets);
    renderRadarChart(data.labels, data.datasets);
    renderPieChart(data.labels, data.datasets);

    // Actualizar los textos de información adicionales
    updatePlatformAverage(platform, data.average);
    updatePlatformPerMonth(platform, data.perMonth);
}

// Función para mostrar la introducción
function showIntro() {
    // Mostrar el texto introductorio
    document.getElementById('introText').style.display = 'block';

    // Ocultar los recuadros de información y los gráficos
    document.getElementById('titleCount').style.display = 'none';
    document.getElementById('productionsCount').style.display = 'none';
    document.getElementById('platformAverage').style.display = 'none';
    document.getElementById('platformPerMonth').style.display = 'none';
    document.querySelector('.chartsContainer').style.display = 'none';
}

// Función para actualizar el recuadro de cantidad de títulos
function updateTitleCount(platform, titleCount) {
    const titleCountElement = document.getElementById('titleCount');
    if (titleCountElement) {
        titleCountElement.innerHTML = `<p>${platform} tiene ${titleCount} títulos disponibles</p>`;
    }
}

// Función para actualizar el recuadro de cantidad de producciones
function updateProductionsCount(platform, productionsCount) {
    const productionsCountElement = document.getElementById('productionsCount');
    if (productionsCountElement) {
        productionsCountElement.innerHTML = `<p>${platform} tiene ${productionsCount} producciones</p>`;
    }
}

// Función para actualizar el recuadro de promedio
function updatePlatformAverage(platform, average) {
    const platformAverageElement = document.getElementById('platformAverage');
    if (platformAverageElement) {
        platformAverageElement.innerHTML = `<p>Promedio en ${platform}: ${average}</p>`;
    }
}

// Función para actualizar el recuadro de cantidad por mes
function updatePlatformPerMonth(platform, perMonth) {
    const platformPerMonthElement = document.getElementById('platformPerMonth');
    if (platformPerMonthElement) {
        platformPerMonthElement.innerHTML = `<p>Por mes en ${platform}: ${perMonth}</p>`;
    }
}

// Funciones para renderizar los gráficos
function renderDoughnutChart(labels, datasets) {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
    doughnutChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function renderBarChart(labels, datasets) {
    const ctx = document.getElementById('barChart').getContext('2d');
    barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function renderLineChart(labels, datasets) {
    const ctx = document.getElementById('lineChart').getContext('2d');
    lineChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function renderRadarChart(labels, datasets) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function renderPieChart(labels, datasets) {
    const ctx = document.getElementById('pieChart').getContext('2d');
    pieChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
