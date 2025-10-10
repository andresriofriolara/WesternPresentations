// shared/js/clock.js
(function(){
  const el = document.querySelector('.utpl-clock');
  if (!el) return;

  const fmt = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });

  function render(){
    el.textContent = fmt.format(new Date());
  }

  function scheduleNextTick(){
    const now = Date.now();
    const msToNextMinute = 60000 - (now % 60000);
    setTimeout(() => {
      render();
      scheduleNextTick();
    }, msToNextMinute + 5); // small buffer
  }

  render();            // initial paint
  scheduleNextTick();  // update on the minute
})();
