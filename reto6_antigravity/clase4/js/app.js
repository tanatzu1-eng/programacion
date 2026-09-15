/*  ==========================================================================
    Lógica e Interactividad - MyCandies (Parodia Web)
    Indentación estricta: 4 espacios
    ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Base de datos de productos con los nombres personalizados del usuario
    const products = [
        {
            id: 'p-1',
            nombre: 'Gomitas Magicas',
            categoria: 'estimulante',
            categoriaTexto: 'Euforia y Emoción',
            foto: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=600&q=80',
            sintomas: 'Euforia incontrolable, ganas repentinas de abrazar a desconocidos y ritmo cardíaco dulce.',
            efectoDetallado: 'Proporciona una oleada masiva de energía sacarosa y serotonina artificial. Ideal para recitales o maratones de estudio de 14 horas.',
            precauciones: 'No consumir antes de dormir ni en funerales. Puede provocar bailes involuntarios.',
            mortalidad: '0.0001% (Riesgo exclusivo de caries fulminante)',
            dulzura: '98%',
            precio: '$ 4.500'
        },
        {
            id: 'p-2',
            nombre: 'Facturas con Azucar en Polvo y Relleno de Morfina',
            categoria: 'relajante',
            categoriaTexto: 'Nirvana',
            foto: 'https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=600&q=80',
            sintomas: 'Sensación de flotar en una nube de pedos dulces y desaparición total del estrés laboral.',
            efectoDetallado: 'Extracto concentrado de menta vintage y glucosa relajante. Anula cualquier preocupación sobre entregas de programación pendientes.',
            precauciones: 'Altamente sedante. No operar maquinaria pesada ni intentar explicar cómo funciona una base de datos.',
            mortalidad: '0.00% (Solo siestas de 12 horas consecutivas)',
            dulzura: '85%',
            precio: '$ 3.800'
        },
        {
            id: 'p-3',
            nombre: 'Licuados Alucinógenos Cósmicos',
            categoria: 'alucinacion',
            categoriaTexto: 'Alucinaciones & Viajes',
            foto: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80',
            sintomas: 'Visión en colores neón, percepción de código HTML flotando en el aire y risa contagiosa.',
            efectoDetallado: 'Contiene cristales de azúcar reflectante que estimulan la imaginación visual y distorsionan la percepción del tiempo.',
            precauciones: 'Evitar mirar al espejo fijamente si no te gustan los duendes de gomita.',
            mortalidad: '0.002% (Confusión momentánea con dimensiones paralelas)',
            dulzura: '92%',
            precio: '$ 5.200'
        },
        {
            id: 'p-4',
            nombre: 'Confites de Serenidad Zen',
            categoria: 'relajante',
            categoriaTexto: 'Nirvana',
            foto: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=600&q=80',
            sintomas: 'Descompresión muscular, respiración pausada y Paciencia de Buda.',
            efectoDetallado: 'Fórmula basada en pectina natural y manzanilla ultra azucarada. Induce un estado de tranquilidad budista inmediata.',
            precauciones: 'Puede causar indiferencia temporal ante opiniones ajenas.',
            mortalidad: '0.00% (Peligro nulo)',
            dulzura: '70%',
            precio: '$ 3.200'
        },
        {
            id: 'p-5',
            nombre: 'Galletas de Concentración Cuántica',
            categoria: 'concentracion',
            categoriaTexto: 'Foco & Hiper-Productividad',
            foto: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
            sintomas: 'Capacidad de escribir 300 líneas de código sin pestañear y memoria fotográfica por 6/8 horas consecutivas.',
            efectoDetallado: 'Micro-dosis de cafeína cristalizada con sirope de arce añejo. Enfoque láser en objetivos complejos.',
            precauciones: 'No combinar con café espresso o podrías empezar a hablar en binario.',
            mortalidad: '0.001% (Riesgo de obsesión por refactorizar todo)',
            dulzura: '75%',
            precio: '$ 6.000'
        },
        {
            id: 'p-6',
            nombre: 'Donas de Euforia',
            categoria: 'estimulante',
            categoriaTexto: 'Euforia y Emoción',
            foto: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=600&q=80',
            sintomas: 'Optimismo desmedido, nostalgia feliz de los años 80 y energía inagotable.',
            efectoDetallado: 'Grageas crocantes con sabor a tutti-frutti clásico. Estimulación auditiva y felicidad nostálgica.',
            precauciones: 'Ganas irresistibles de cantar synthwave en público.',
            mortalidad: '0.00% (Felicidad empalagosa)',
            dulzura: '95%',
            precio: '$ 4.100'
        },
        {
            id: 'p-7',
            nombre: 'Píldoras de Extasis con Sabor Frecita',
            categoria: 'concentracion',
            categoriaTexto: 'Foco & Hiper-Productividad',
            foto: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
            sintomas: 'Recordar contraseñas olvidadas de hace 5 años y entender algoritmos a la primera.',
            efectoDetallado: 'Tabletas efervescentes con glucosa cerebral optimizada para estudiantes y programadores.',
            precauciones: 'Recordarás momentos vergonzosos de la infancia con lujo de detalles.',
            mortalidad: '0.00% (Inocuo)',
            dulzura: '65%',
            precio: '$ 5.500'
        },
        {
            id: 'p-8',
            nombre: 'Trufas de Alucinación Tropical',
            categoria: 'alucinacion',
            categoriaTexto: 'Alucinaciones & Viajes',
            foto: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80',
            sintomas: 'Sabores que se escuchan y sonidos que huelen a maracuyá y cacao puro.',
            efectoDetallado: 'Chocolate belga artesanal infusionado con jarabe de piña mágica y chispas efervescentes.',
            precauciones: 'Puede generar conversaciones filosóficas profundas con mascotas.',
            mortalidad: '0.001% (Atracón de chocolate)',
            dulzura: '88%',
            precio: '$ 5.900'
        }
    ];

    // Estado de la aplicación
    const state = {
        activeFilter: 'all',
        searchQuery: '',
        theme: localStorage.getItem('mycandies_theme') || 'dark',
        user: JSON.parse(localStorage.getItem('mycandies_user')) || null
    };

    // Elementos del DOM
    const productsGrid = document.getElementById('products-grid');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const logoHomeBtn = document.getElementById('logo-home');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const menuDrawer = document.getElementById('menu-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');

    // Modales y Toasts
    const productModal = document.getElementById('product-modal');
    const closeProductModalBtn = document.getElementById('close-product-modal');
    const accountModal = document.getElementById('account-modal');
    const closeAccountModalBtn = document.getElementById('close-account-modal');
    const accountForm = document.getElementById('account-form');
    const toastContainer = document.getElementById('toast-container');

    // Botones de Configuración / Perfil
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const openCreateAccountBtn = document.getElementById('open-create-account-btn');
    const openEditAccountBtn = document.getElementById('open-edit-account-btn');
    const deleteAccountBtn = document.getElementById('delete-account-btn');
    const userStatusText = document.getElementById('user-status-text');

    // =========================================================================
    // Inicialización
    // =========================================================================
    function init() {
        applyTheme(state.theme);
        updateUserUI();
        renderProducts();
        setupEventListeners();
    }

    // =========================================================================
    // Renderizado de Productos con Orden Alfabético
    // =========================================================================
    function getFilteredProducts() {
        return products
            .filter(product => {
                // Filtro por categoría/efecto
                const matchesCategory = state.activeFilter === 'all' || product.categoria === state.activeFilter;
                
                // Filtro por búsqueda de texto
                const query = state.searchQuery.trim().toLowerCase();
                const matchesSearch = query === '' || 
                    product.nombre.toLowerCase().includes(query) || 
                    product.sintomas.toLowerCase().includes(query);

                return matchesCategory && matchesSearch;
            })
            .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
    }

    function renderProducts() {
        const filtered = getFilteredProducts();

        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div class="col-span-full text-center py-16 px-4 vintage-card rounded-2xl animate-fade-in">
                    <div class="text-5xl mb-4">🍬❓</div>
                    <h3 class="text-2xl font-heading font-bold text-amber-500 mb-2">No encontramos golosinas con ese criterio</h3>
                    <p class="font-body text-stone-300 text-lg max-w-md mx-auto">
                        Intenta buscar con otra palabra clave o restablece los filtros del menú lateral.
                    </p>
                    <button id="reset-filters-btn" class="mt-6 vintage-btn px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-xl">
                        Ver todas las golosinas
                    </button>
                </div>
            `;
            const resetBtn = document.getElementById('reset-filters-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', resetAllFilters);
            }
            return;
        }

        productsGrid.innerHTML = filtered.map(product => `
            <article class="vintage-card rounded-2xl overflow-hidden flex flex-col justify-between group animate-fade-in" data-id="${product.id}">
                <div>
                    <!-- Imagen con zoom en hover -->
                    <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-950/50">
                        <img 
                            src="${product.foto}" 
                            alt="Golosina ${product.nombre}" 
                            loading="lazy"
                            onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=600&q=80'"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        >
                        <span class="absolute top-3 right-3 text-xs font-ui font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
                            ${product.categoriaTexto}
                        </span>
                    </div>

                    <!-- Contenido de la Tarjeta -->
                    <div class="p-5">
                        <div class="flex items-baseline justify-between mb-2">
                            <h2 class="font-heading text-xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                                ${product.nombre}
                            </h2>
                        </div>
                        <p class="font-body text-stone-300 text-base line-clamp-3 mb-4">
                            ${product.sintomas}
                        </p>
                    </div>
                </div>

                <!-- Pie de Tarjeta con Precio y Botón -->
                <div class="p-5 pt-0 border-t border-amber-900/20 flex items-center justify-between mt-auto">
                    <div>
                        <span class="text-xs font-ui uppercase text-stone-400 block">Dulzura: ${product.dulzura}</span>
                        <span class="font-heading text-lg font-bold text-amber-500">${product.precio}</span>
                    </div>

                </div>
            </article>
        `).join('');

        // Listeners para hacer clic en la tarjeta del producto
        document.querySelectorAll('article[data-id]').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                openProductDetailModal(id);
            });
        });
    }

    // =========================================================================
    // Modal de Detalle de Producto
    // =========================================================================
    function openProductDetailModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        document.getElementById('modal-product-title').textContent = product.nombre;
        document.getElementById('modal-product-category').textContent = product.categoriaTexto;
        document.getElementById('modal-product-img').src = product.foto;
        document.getElementById('modal-product-img').alt = product.nombre;
        document.getElementById('modal-product-effects').textContent = product.efectoDetallado;
        document.getElementById('modal-product-precautions').textContent = product.precauciones;
        document.getElementById('modal-product-mortality').textContent = product.mortalidad;
        document.getElementById('modal-product-sweetness').textContent = product.dulzura;
        document.getElementById('modal-product-price').textContent = product.precio;

        productModal.showModal();
    }

    // =========================================================================
    // Modal y Lógica de Cuenta / Perfil (Validaciones con Borde Rojo)
    // =========================================================================
    function openAccountModal(mode = 'create') {
        accountForm.reset();
        clearValidationErrors();

        const title = document.getElementById('account-modal-title');
        const submitBtnText = document.getElementById('account-submit-text');

        if (mode === 'edit' && state.user) {
            title.textContent = 'Modificar Perfil de Usuario';
            submitBtnText.textContent = 'Guardar Cambios';

            document.getElementById('input-nombre').value = state.user.nombre || '';
            document.getElementById('input-apellido').value = state.user.apellido || '';
            document.getElementById('input-email').value = state.user.email || '';
            document.getElementById('input-telefono').value = state.user.telefono || '';
            document.getElementById('input-documento').value = state.user.documento || '';
        } else {
            title.textContent = 'Crear Cuenta en MyCandies';
            submitBtnText.textContent = 'Crear Cuenta';
        }

        accountModal.showModal();
    }

    function clearValidationErrors() {
        const fields = ['nombre', 'apellido', 'email', 'telefono', 'tarjeta', 'numero-tarjeta', 'expiracion', 'cvv'];
        fields.forEach(field => {
            const input = document.getElementById(`input-${field}`);
            const errorMsg = document.getElementById(`error-${field}`);
            if (input) {
                input.classList.remove('border-red-500', 'focus:border-red-500', 'bg-red-950/20');
                input.classList.add('border-amber-900/40');
            }
            if (errorMsg) {
                errorMsg.classList.add('hidden');
                errorMsg.textContent = '';
            }
        });
    }

    function setFieldError(field, message) {
        const input = document.getElementById(`input-${field}`);
        const errorMsg = document.getElementById(`error-${field}`);
        if (input) {
            input.classList.remove('border-amber-900/40');
            input.classList.add('border-red-500', 'focus:border-red-500', 'bg-red-950/20');
        }
        if (errorMsg) {
            errorMsg.classList.remove('hidden');
            errorMsg.textContent = message;
        }
    }

    function validateAccountForm() {
        clearValidationErrors();
        let isValid = true;

        const nombre = document.getElementById('input-nombre').value.trim();
        const apellido = document.getElementById('input-apellido').value.trim();
        const email = document.getElementById('input-email').value.trim();
        const telefono = document.getElementById('input-telefono').value.trim();
        // const documento = document.getElementById('input-documento').value.trim();

        // Validación Nombre
        if (nombre.length < 2 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            setFieldError('nombre', 'El nombre debe contener al menos 2 letras y sin caracteres especiales o numeros.');
            isValid = false;
        }

        // Validación Apellido
        if (apellido.length < 2 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
            setFieldError('apellido', 'El apellido debe contener al menos 2 letras.');
            isValid = false;
        }

        // Validación Email (solo Gmail, Hotmail, Yahoo, al menos un carácter alfanumérico antes de @)
        const emailRegex = /^[A-Za-z0-9][A-Za-z0-9._%+-]*@(gmail\.com|hotmail\.com|yahoo\.com)$/i;
        if (!emailRegex.test(email)) {
            setFieldError('email', 'El correo debe ser Gmail, Hotmail o Yahoo y contener al menos un carácter alfanumérico antes de la @.');
            isValid = false;
        }

        // Validación Teléfono (solo números, 7-15 dígitos)
        const phoneRegex = /^\d{7,15}$/;
        if (!phoneRegex.test(telefono)) {
            setFieldError('telefono', 'El teléfono debe contener solo números y entre 7 y 15 dígitos.');
            isValid = false;
        }

                // Documento validation removed

        const tarjeta = document.getElementById('input-tarjeta').value;
        const numeroTarjeta = document.getElementById('input-numero-tarjeta').value.trim();
        const expiracion = document.getElementById('input-expiracion').value.trim();
        const cvv = document.getElementById('input-cvv').value.trim();

        // Validación Tipo de Tarjeta (obligatorio)
        if (!tarjeta) {
            setFieldError('tarjeta', 'Seleccione un tipo de tarjeta.');
            isValid = false;
        } else if (tarjeta === 'Visa') {
            if (!/^4\d{15}$/.test(numeroTarjeta)) {
                setFieldError('numero-tarjeta', 'Visa debe tener 16 dígitos y comenzar con 4.');
                isValid = false;
            }
            if (!/^\d{3}$/.test(cvv)) {
                setFieldError('cvv', 'El código de seguridad debe ser de 3 dígitos.');
                isValid = false;
            }
        } else if (tarjeta === 'MasterCard') {
            if (!/^\d{13,19}$/.test(numeroTarjeta)) {
                setFieldError('numero-tarjeta', 'MasterCard debe tener entre 13 y 19 dígitos numéricos.');
                isValid = false;
            }
            if (!/^\d{3}$/.test(cvv)) {
                setFieldError('cvv', 'El código de seguridad debe ser de 3 dígitos.');
                isValid = false;
            }
        } else if (tarjeta === 'Pasaporte') {
            if (!/^[a-zA-Z0-9]{6,11}$/.test(numeroTarjeta)) {
                setFieldError('numero-tarjeta', 'Pasaporte debe tener entre 6 y 11 caracteres alfanuméricos.');
                isValid = false;
            }
            // No CVV para Pasaporte
        }

        // Validación Expiración (MM/AAAA)
        if (expiracion.length === 0) {
            setFieldError('expiracion', 'La fecha de vencimiento es obligatoria.');
            isValid = false;
        } else if (!/^\d{2}\/\d{4}$/.test(expiracion)) {
            setFieldError('expiracion', 'Formato inválido. Use MM/AAAA.');
            isValid = false;
        }

        return isValid ? { nombre, apellido, email, telefono, documento, tarjeta, numeroTarjeta, expiracion, ...(tarjeta !== 'Pasaporte' && { cvv }) } : null;
    }

    function handleAccountFormSubmit(e) {
        e.preventDefault();
        const validatedData = validateAccountForm();

        if (!validatedData) {
            // No regresa a home, se mantiene en el modal con los bordes rojos
            return;
        }

        const isEditing = state.user !== null;
        state.user = validatedData;
        localStorage.setItem('mycandies_user', JSON.stringify(state.user));

        updateUserUI();
        accountModal.close();
        closeDrawer();
        resetAllFilters(); // Regresa visualmente al home

        if (isEditing) {
            showToast('✨ Cuenta modificada con éxito.', 'success');
        } else {
            showToast('🎉 ¡Cuenta creada con éxito! Bienvenido a MyCandies.', 'success');
        }
    }

    function deleteAccount() {
        if (!state.user) return;

        const confirmDelete = confirm('¿Estás seguro de que deseas borrar tu cuenta de usuario?');
        if (confirmDelete) {
            state.user = null;
            localStorage.removeItem('mycandies_user');
            updateUserUI();
            closeDrawer();
            resetAllFilters();
            showToast('🗑️ Tu cuenta ha sido eliminada con éxito.', 'info');
        }
    }

    function updateUserUI() {
        if (state.user) {
            userStatusText.innerHTML = `
                <div class="text-amber-400 font-semibold font-ui text-sm">👤 ${state.user.nombre} ${state.user.apellido}</div>
                <div class="text-xs text-stone-400 font-ui">${state.user.email}</div>
            `;
            openCreateAccountBtn.classList.add('hidden');
            openEditAccountBtn.classList.remove('hidden');
            deleteAccountBtn.classList.remove('hidden');
        } else {
            userStatusText.innerHTML = `
                <div class="text-stone-400 font-ui text-sm">Invitado (Sin cuenta)</div>
            `;
            openCreateAccountBtn.classList.remove('hidden');
            openEditAccountBtn.classList.add('hidden');
            deleteAccountBtn.classList.add('hidden');
        }
    }

    // =========================================================================
    // Tema Oscuro / Claro
    // =========================================================================
    function applyTheme(theme) {
        state.theme = theme;
        localStorage.setItem('mycandies_theme', theme);

        if (theme === 'light') {
            document.documentElement.classList.add('light');
            themeToggleBtn.innerHTML = '🌙 Cambiar a Modo Oscuro';
        } else {
            document.documentElement.classList.remove('light');
            themeToggleBtn.innerHTML = '☀️ Cambiar a Modo Claro';
        }
    }

    function toggleTheme() {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        showToast(`Cambiado a ${nextTheme === 'light' ? 'Modo Claro' : 'Modo Oscuro'}.`, 'info');
    }

    // =========================================================================
    // Notificaciones Toast
    // =========================================================================
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        const bgColor = type === 'success' ? 'bg-emerald-800 text-emerald-100 border-emerald-500' : 'bg-amber-800 text-amber-100 border-amber-500';

        toast.className = `toast-box flex items-center gap-3 px-5 py-3.5 rounded-xl border shadow-2xl font-ui font-medium text-sm backdrop-blur-md ${bgColor}`;
        toast.innerHTML = `
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
            setTimeout(() => toast.remove(), 500);
        }, 3500);
    }

    // =========================================================================
    // Control de Filtros y Drawer Lateral
    // =========================================================================
    function openDrawer() {
        menuDrawer.classList.remove('translate-x-full');
        drawerBackdrop.classList.remove('hidden');
        drawerBackdrop.classList.add('opacity-100');
    }

    function closeDrawer() {
        menuDrawer.classList.add('translate-x-full');
        drawerBackdrop.classList.add('hidden');
        drawerBackdrop.classList.remove('opacity-100');
    }

    function resetAllFilters() {
        state.activeFilter = 'all';
        state.searchQuery = '';
        searchInput.value = '';

        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === 'all') {
                btn.classList.add('bg-amber-500', 'text-stone-950', 'font-bold');
                btn.classList.remove('bg-stone-900/60', 'text-stone-300');
            } else {
                btn.classList.remove('bg-amber-500', 'text-stone-950', 'font-bold');
                btn.classList.add('bg-stone-900/60', 'text-stone-300');
            }
        });

        renderProducts();
    }

    // =========================================================================
    // Listeners Globales
    // =========================================================================
    function setupEventListeners() {
        // Búsqueda en vivo
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            renderProducts();
        });

        // Botón Home / Reset
        logoHomeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            resetAllFilters();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Menú lateral
        hamburgerBtn.addEventListener('click', openDrawer);
        closeDrawerBtn.addEventListener('click', closeDrawer);
        drawerBackdrop.addEventListener('click', closeDrawer);

        // Filtros por Categoría
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => {
                    b.classList.remove('bg-amber-500', 'text-stone-950', 'font-bold');
                    b.classList.add('bg-stone-900/60', 'text-stone-300');
                });
                btn.classList.add('bg-amber-500', 'text-stone-950', 'font-bold');
                btn.classList.remove('bg-stone-900/60', 'text-stone-300');

                state.activeFilter = btn.getAttribute('data-filter');
                renderProducts();
                closeDrawer();
            });
        });

        // Modales
        closeProductModalBtn.addEventListener('click', () => productModal.close());
        closeAccountModalBtn.addEventListener('click', () => accountModal.close());

        // Cerrar modales haciendo click afuera en el backdrop
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) productModal.close();
        });
        accountModal.addEventListener('click', (e) => {
            if (e.target === accountModal) accountModal.close();
        });

        // Formulario
        accountForm.addEventListener('submit', handleAccountFormSubmit);

        // Perfil / Configuración
        openCreateAccountBtn.addEventListener('click', () => openAccountModal('create'));
        openEditAccountBtn.addEventListener('click', () => openAccountModal('edit'));
        deleteAccountBtn.addEventListener('click', deleteAccount);
        // Mostrar/ocultar CVV según tipo de tarjeta
        const tarjetaSelect = document.getElementById('input-tarjeta');
        const cvvWrapper = document.getElementById('cvv-wrapper');
        tarjetaSelect.addEventListener('change', function () {
            if (this.value === 'Visa' || this.value === 'MasterCard') {
                cvvWrapper.classList.remove('hidden');
            } else {
                cvvWrapper.classList.add('hidden');
            }
        });

    }

    // Iniciar aplicación
    init();
});
