const adminModules = [
    ['project-management', 'project-management.html', 'fa-diagram-project', 'Project Management'],
    ['task-management', 'task-management.html', 'fa-list-check', 'Task Management'],
    ['employee-labor-management', 'employee-labor-management.html', 'fa-users-gear', 'Employee & Labor'],
    ['material-management', 'material-management.html', 'fa-boxes-stacked', 'Material Management'],
    ['equipment-management', 'equipment-management.html', 'fa-truck-pickup', 'Equipment Management'],
    ['budget-cost-management', 'budget-cost-management.html', 'fa-file-invoice-dollar', 'Budget & Cost'],
    ['subcontractor-supplier-management', 'subcontractor-supplier-management.html', 'fa-handshake', 'Subcontractor & Supplier'],
    ['document-management', 'document-management.html', 'fa-folder-open', 'Document Management'],
    ['site-monitoring', 'site-monitoring.html', 'fa-eye', 'Site Monitoring'],
    ['communication-management', 'communication-management.html', 'fa-comments', 'Communication'],
    ['reports-analytics', 'reports-analytics.html', 'fa-chart-line', 'Reports & Analytics'],
    ['client-portal-management', 'client-portal-management.html', 'fa-user-tie', 'Client Portal']
];

function renderAdminLayout() {
    const sidebarSlot = document.getElementById('adminSidebar');
    const footerSlot = document.getElementById('adminFooter');
    const active = sidebarSlot ? sidebarSlot.dataset.active : '';

    if (sidebarSlot) {
        const moduleLinks = adminModules.map(([key, href, icon, label]) => {
            const activeClass = active === key ? ' active' : '';
            return `<a href="${href}" class="nav-link${activeClass}"><i class="fa-solid ${icon}"></i> ${label}</a>`;
        }).join('');

        sidebarSlot.outerHTML = `
            <nav class="sidebar">
                <a class="brand-link" href="admin.html">
                    <span class="brand-mark"><i class="fa-solid fa-helmet-safety"></i></span>
                    <span>BUILD<span class="text-warning">CORE</span></span>
                </a>
                <div class="sidebar-label">Workspace</div>
                <div class="nav flex-column">
                    <a href="admin.html" class="nav-link"><i class="fa-solid fa-sliders"></i> Admin Control</a>
                    <div class="admin-submenu">${moduleLinks}</div>
                    <div class="sidebar-label">Role Portals</div>
                    <a href="qs.html" class="nav-link"><i class="fa-solid fa-calendar-check"></i> QS Planning</a>
                    <a href="site-manager.html" class="nav-link"><i class="fa-solid fa-square-check"></i> Field Execution</a>
                    <a href="client.html" class="nav-link"><i class="fa-solid fa-chart-line"></i> Client Hub</a>
                    <a href="login.html" class="nav-link text-danger mt-3"><i class="fa-solid fa-power-off"></i> Exit Session</a>
                </div>
            </nav>`;
    }

    if (footerSlot) {
        footerSlot.outerHTML = `
            <footer class="admin-footer">
                <div class="footer-line d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <span><i class="fa-solid fa-helmet-safety text-warning me-1"></i> BuildCore Admin Control</span>
                    <span>&copy; 2026 BuildCore Platforms Inc. All operations monitored securely.</span>
                </div>
            </footer>`;
    }
}

document.addEventListener('DOMContentLoaded', renderAdminLayout);
