export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function moduleType (type) {
  switch (type) {
    case 1:
      return 'DB'
    default:
      return 'Shell'
  }
}

export function moduleActiveText (type) {
  switch (type) {
    case 1:
      return '启用'
    default:
      return '禁用'
  }
}

export function moduleActiveClass (type) {
  switch (type) {
    case 1:
      return 'text-success'
    default:
      return 'text-error'
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
