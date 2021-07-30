let acceptables = [
  'follower-latest',
  'subscriber-latest',
  'host-latest',
  'cheer-latest',
  'tip-latest',
  'raid-latest'
]

window.addEventListener('onEventReceived', obj => {
  let {listener, event} = obj.detail;
  if(!acceptables.includes(listener)) return
  $('#container').html(`${event.name} - ${event.type} x${listener == 'follower-latest' ? '' : event.amount}`)
});